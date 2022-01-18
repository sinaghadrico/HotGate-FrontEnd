import { ConfirmModal, Input } from "ui-components";
import useWebWallet from "hooks/use-web-wallet/useWebWallet";
import { WithdrawProps } from "./Withdraw.interface";

import "./Withdraw.scss";
import { useState } from "react";
import { formatNumberWithCommas, isValidNumber, parseValueToNumber } from "utils/number";
import TokenSelector from "components/token-selector/TokenSelector";

const Withdraw = ({ open, onClose, onConfirm, data }: WithdrawProps) => {
    const { inputToken, outputToken } = data;
    const { account } = useWebWallet();

    const [form, setForm] = useState({
        amount: inputToken?.balance,
        inputToken: { key: inputToken?.symbol?.toLowerCase(), value: inputToken?.symbol },
        receivedAmount: outputToken?.balance,
        outputToken: { key: outputToken?.symbol?.toLowerCase(), value: outputToken?.symbol },
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
    return (
        <ConfirmModal
            width="100"
            style={{ maxWidth: "348px" }}
            title="Withdraw"
            open={open}
            onClose={onClose}
            onCancel={onClose}
            onConfirm={() => onConfirm(form)}
            confirmTitle="Withdraw"
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
            <Input
                prefix={<TokenSelector title="Output Token" token={form?.outputToken} />}
                className="my-10"
                label="Amount"
                value={formatNumberWithCommas(form?.receivedAmount)}
                name="receivedAmount"
                onChange={handleChange}
                autoComplete="off"
            />
            <Input
                className="my-10"
                label="Receiver Address"
                value={form?.receiverAddress}
                name="receiverAddress"
                onChange={handleChange}
                autoComplete="off"
            />
        </ConfirmModal>
    );
};
export default Withdraw;
