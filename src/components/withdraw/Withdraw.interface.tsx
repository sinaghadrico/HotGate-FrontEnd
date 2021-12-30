export interface WithdrawProps {
    open: boolean;
    onConfirm: (data: any) => void;
    onClose: () => void;
    type?: string;
}
