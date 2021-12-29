import { ConfirmModal } from "ui-components";

import { AdvancedSettingsProps } from "./AdvancedSettings.interface";

import "./AdvancedSettings.scss";
import { useState } from "react";

const AdvancedSettings = ({ open, onClose, onConfirm }: AdvancedSettingsProps) => {
    const [form, setForm] = useState({});
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
        ></ConfirmModal>
    );
};
export default AdvancedSettings;
