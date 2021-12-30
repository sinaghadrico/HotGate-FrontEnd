import { ConfirmModal, Input } from "ui-components";

import { WithdrawProps } from "./Withdraw.interface";

import "./Withdraw.scss";
import { useState } from "react";
import { formatNumberWithCommas, isValidNumber, parseValueToNumber } from "utils/number";
import TokenSelector from "components/token-selector/TokenSelector";

const Withdraw = ({ open, onClose, onConfirm }: WithdrawProps) => {
    const [form, setForm] = useState({
        amount: 0,
        inputToken: { key: "bsc", value: "BSC" },
        receivedAmount: 0,
        outputToken: { key: "bsc", value: "BSC" },
        receiverAddress: "",
    });
    const handleChange = (event: any) => {
        const { name, value: _value } = event.target;
        const value = parseValueToNumber("" + _value);
        const isValid = isValidNumber("" + _value);

        if (name === "receiverAddress" || name === "inputToken" || name === "outputToken") {
            setForm({ ...form, [name]: _value });
        }
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
                prefix={
                    <TokenSelector
                        title="Input Token"
                        onChangeValue={(token: any) => {
                            handleChange({ target: { name: "inputToken", value: token } });
                        }}
                        token={form?.inputToken}
                    />
                }
                className="my-10"
                label="Amount"
                value={formatNumberWithCommas(form?.amount)}
                name="amount"
                onChange={handleChange}
                autoComplete="off"
            />
            <Input
                prefix={
                    <TokenSelector
                        title="Output Token"
                        onChangeValue={(token: any) => {
                            handleChange({ target: { name: "outputToken", value: token } });
                        }}
                        token={form?.outputToken}
                    />
                }
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
