export interface DepositProps {
    open: boolean;
    onConfirm: (data: any) => void;
    onClose: () => void;
    type?: string;
    data: any
}
