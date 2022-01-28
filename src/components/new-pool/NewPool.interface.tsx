export interface NewPoolProps {
    open: boolean;
    onConfirm: (data: any) => void;
    onClose: () => void;
    type?: string;

}
