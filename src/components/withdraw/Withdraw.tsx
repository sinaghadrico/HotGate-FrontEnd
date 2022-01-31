import { ConfirmModal, Input } from "ui-components";
import useWebWallet from "hooks/use-web-wallet/useWebWallet";
import { WithdrawProps } from "./Withdraw.interface";

import "./Withdraw.scss";
import { useState } from "react";
import { formatNumberWithCommas, isValidNumber, parseValueToNumber } from "utils/number";
import TokenSelector from "components/token-selector/TokenSelector";

import { useExchangeRouter } from "services/predictor/contract/useExchangeRouter";
import { useFastRouter } from "services/predictor/contract/useFastRouter";
import { useInstantRouter } from "services/predictor/contract/useInstantRouter";

import { useGlobalState } from "states/globalContext";
import { useMutation } from "react-query";
import useNotification from "hooks/useNotification";

const Withdraw = ({ open, onClose, onConfirm, data }: WithdrawProps) => {
    const { inputToken, outputToken, balance, totalSupply, address } = data;
    const { account } = useWebWallet();
    const notification = useNotification();
    const { poolsFilters } = useGlobalState();

    const exchangeRouter = useExchangeRouter();
    const fastRouter = useFastRouter();
    const istantRouter = useInstantRouter();

    const [form, setForm] = useState({
        amount: balance,
        inputToken: inputToken,
        receivedAmount: 0,
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
            setForm({ ...form, [name]: value });
        }
    };



    const mutationNormlWithdraw = useMutation((_form: any): any => {
        const amountAmin = (_form?.amount * inputToken?.amount / totalSupply * 0.95).toString()
        const amountBmin = (_form?.amount * outputToken?.amount / totalSupply * 0.95).toString()
        return exchangeRouter?.withdraw(_form?.inputToken?.address, _form?.outputToken?.address, amountAmin, amountBmin, _form?.amount, address);
    });

    const mutationFastWithdraw = useMutation((_form: any): any => {
        return fastRouter?.withdraw(_form.receiverAddress, _form?.amount);
    });
    const mutationInstantWithdraw = useMutation((_form: any): any => {
        return istantRouter?.withdraw(_form.receiverAddress, _form?.amount);
    });

    const handleWithdraw = () => {
        if (form.amount === 0) {
            notification.error(`Enter Input Token Amount Greater Than 0  `);
            return null
        }
        if (poolsFilters?.value === "liquidity") {
            if (!mutationNormlWithdraw?.isSuccess) {
                mutationNormlWithdraw.mutate(
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
            if (!mutationFastWithdraw?.isSuccess) {
                mutationFastWithdraw.mutate(
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
            if (!mutationInstantWithdraw?.isSuccess) {
                mutationInstantWithdraw.mutate(
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
            title="Withdraw"
            open={open}
            onClose={onClose}
            onCancel={onClose}
            onConfirm={handleWithdraw}
            confirmTitle="Withdraw"
            cancelTitle="Cancel"
            isLoading={mutationNormlWithdraw?.isLoading || mutationFastWithdraw?.isLoading || mutationInstantWithdraw?.isLoading}
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
            {/* {outputToken &&
                <Input
                    prefix={<TokenSelector title="Output Token" token={form?.outputToken} />}
                    className="my-10"
                    label="Amount"
                    value={formatNumberWithCommas(form?.receivedAmount)}
                    name="receivedAmount"
                    onChange={handleChange}
                    autoComplete="off"
                />
            } */}
            <Input
                className="my-10"
                label="Receiver Address"
                value={form?.receiverAddress}
                name="receiverAddress"
                onChange={handleChange}
                autoComplete="off"
            />
        </ConfirmModal >
    );
};
export default Withdraw;
