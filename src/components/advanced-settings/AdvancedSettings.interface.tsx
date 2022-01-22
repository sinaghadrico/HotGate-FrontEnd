export interface AdvancedSettingsProps {
    open: boolean;
    onConfirm?: (data: any) => void;
    onClose: () => void;
    type?: string;
    defaultSetting?: any
}
