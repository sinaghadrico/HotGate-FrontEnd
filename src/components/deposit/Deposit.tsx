import { ConfirmModal, Input } from "ui-components";

import { DepositProps } from "./Deposit.interface";

import "./Deposit.scss";
import { useState } from "react";
import { formatNumberWithCommas, isValidNumber, parseValueToNumber } from "utils/number";
import TokenSelector from "components/token-selector/TokenSelector";

const Deposit = ({ open, onClose, onConfirm, data }: DepositProps) => {
    const { inputToken, outputToken } = data;

    const [form, setForm] = useState({
        amount: 0,
        inputToken: { key: inputToken?.symbol?.toLowerCase(), value: inputToken?.symbol },
        receivedAmount: 0,
        outputToken: { key: outputToken?.symbol?.toLowerCase(), value: outputToken?.symbol },
        receiverAddress: "",

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
            title="Deposit"
            open={open}
            onClose={onClose}
            onCancel={onClose}
            onConfirm={() => onConfirm(form)}
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
            <Input
                prefix={<TokenSelector title="Output Token" token={form?.outputToken} />}
                className="my-10"
                label="Amount"
                value={formatNumberWithCommas(form?.receivedAmount)}
                name="receivedAmount"
                onChange={handleChange}
                autoComplete="off"
            />
        </ConfirmModal>
    );
};
export default Deposit;
