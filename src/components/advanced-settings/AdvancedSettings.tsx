import { ConfirmModal, Input } from "ui-components";

import { AdvancedSettingsProps } from "./AdvancedSettings.interface";

import "./AdvancedSettings.scss";
import { useState } from "react";
import { formatNumberWithCommas, isValidNumber, parseValueToNumber } from "utils/number";

const AdvancedSettings = ({ open, onClose, onConfirm, type = "normal" }: AdvancedSettingsProps) => {
    const [form, setForm] = useState({ deadline: 0, slippage: 0, confirmations: 20 });
    const handleChange = (event: any) => {
        const { name, value: _value } = event.target;
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
            title="Advanced Settings"
            open={open}
            onClose={onClose}
            onCancel={onClose}
            onConfirm={() => onConfirm(form)}
            confirmTitle="Save"
            cancelTitle="Cancel"
        >
            <Input
                className="my-10"
                label="Exchange Deadline (Mins)"
                value={formatNumberWithCommas(form?.deadline)}
                name="deadline"
                onChange={handleChange}
                autoComplete="off"
            />
            <Input
                className="my-10"
                value={formatNumberWithCommas(form?.slippage)}
                name="slippage"
                label="Tolerated Slippage (%)"
                onChange={handleChange}
                autoComplete="off"
            />
            {type === "fast" && (
                <Input
                    className="my-10"
                    value={formatNumberWithCommas(form?.confirmations)}
                    name="confirmations"
                    label="Confirmations Required"
                    onChange={handleChange}
                    autoComplete="off"
                />
            )}
        </ConfirmModal>
    );
};
export default AdvancedSettings;
