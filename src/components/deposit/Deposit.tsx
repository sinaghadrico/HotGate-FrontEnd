import { ConfirmModal, Input } from "ui-components";
import useWebWallet from "hooks/use-web-wallet/useWebWallet";
import { DepositProps } from "./Deposit.interface";
import { useGlobalState } from "states/globalContext";

import "./Deposit.scss";
import { useState } from "react";
import { formatNumberWithCommas, isValidNumber, parseValueToNumber } from "utils/number";
import TokenSelector from "components/token-selector/TokenSelector";
import { useExchangeRouter } from "services/predictor/contract/useExchangeRouter";
import { useFastRouter } from "services/predictor/contract/useFastRouter";
import { useInstantRouter } from "services/predictor/contract/useInstantRouter";

import useNotification from "hooks/useNotification";
import { useMutation } from "react-query";

const Deposit = ({ open, onClose, onConfirm, data }: DepositProps) => {
    const { inputToken, outputToken } = data;
    const { poolsFilters } = useGlobalState();
    const { account } = useWebWallet();
    const notification = useNotification();
    const exchangeRouter = useExchangeRouter();
    const fastRouter = useFastRouter();
    const istantRouter = useInstantRouter();
    const [form, setForm] = useState({
        amount: inputToken?.balance,
        inputToken: inputToken,
        receivedAmount: (outputToken?.amount * inputToken?.balance / inputToken.amount) || inputToken?.balance,
        outputToken: outputToken,
        receiverAddress: account,

    });

    const handleChange = (event: any) => {
        const { name, value: _value } = event.target;


        if (name === "receiverAddress") {
            setForm({ ...form, [name]: _value });
            return null;
        }

        const value = parseValueToNumber("" + _value);
        const isValid = isValidNumber("" + _value);

        if (isValid) {

            // Second token amount = (second token reserve)*(first token amount)/(first token reserve)
            if (name === "amount") {

                setForm({ ...form, [name]: value, receivedAmount: (form?.outputToken?.amount * Number(value) / form.inputToken.amount) || value });
                return null;
            }
            if (name === "receivedAmount") {
                // First token amount = (first token reserve)*(second token amount)/(second token reserve)
                setForm({ ...form, [name]: value, amount: (form.inputToken.amount * Number(value) / form.outputToken.amount) || value });
                return null;
            }
            setForm({ ...form, [name]: value });
        }
    };

    const mutationNormlDeposit = useMutation((_form: any): any => {
        return exchangeRouter?.deposit(_form?.inputToken?.address, _form?.outputToken?.address, _form?.amount, _form?.receivedAmount);
    });

    const mutationFastDeposit = useMutation((_form: any): any => {
        return fastRouter?.deposit(_form?.amount);
    });
    const mutationInstantDeposit = useMutation((_form: any): any => {
        return istantRouter?.deposit(_form?.amount);
    });

    const handleDeposit = () => {
        if (poolsFilters?.value === "liquidity") {

            if (form.amount === 0 || form.receivedAmount === 0) {
                notification.error(`Enter Input Token Amount And  Output Token Amount Greater Than 0  `);
                return null
            }
            if (!mutationNormlDeposit?.isSuccess) {
                mutationNormlDeposit.mutate(
                    form,
                    {
                        onSuccess: () => {
                            onConfirm(form)
                        },

                    },
                );
            }
        }
        else if (poolsFilters?.value === "fast") {
            if (form.amount === 0) {
                notification.error(`Enter Input Token Amount Greater Than 0  `);
                return null
            }
            if (!mutationFastDeposit?.isSuccess) {
                mutationFastDeposit.mutate(
                    form,
                    {
                        onSuccess: () => {
                            onConfirm(form)
                        },

                    },
                );
            }
        }
        else if (poolsFilters?.value === "instant") {
            if (form.amount === 0) {
                notification.error(`Enter Input Token Amount Greater Than 0  `);
                return null
            }
            if (!mutationInstantDeposit?.isSuccess) {
                mutationInstantDeposit.mutate(
                    form,
                    {
                        onSuccess: () => {
                            onConfirm(form)
                        },

                    },
                );
            }
        }

    };

    return (
        <ConfirmModal
            width="100"
            style={{ maxWidth: "348px" }}
            title="Deposit"
            open={open}
            onClose={onClose}
            onCancel={onClose}
            onConfirm={handleDeposit}
            confirmTitle="Deposit"
            cancelTitle="Cancel"
        >
            <Input
                prefix={<TokenSelector title="Input Token" token={form?.inputToken} />}
                className="my-10"
                label="Amount"
                value={formatNumberWithCommas(form?.amount)}
                name="amount"
                onChange={handleChange}
                autoComplete="off"
            />
            {outputToken && <Input
                prefix={<TokenSelector title="Output Token" token={form?.outputToken} />}
                className="my-10"
                label="Amount"
                value={formatNumberWithCommas(form?.receivedAmount)}
                name="receivedAmount"
                onChange={handleChange}
                autoComplete="off"
            />}

        </ConfirmModal>
    );
};
export default Deposit;
