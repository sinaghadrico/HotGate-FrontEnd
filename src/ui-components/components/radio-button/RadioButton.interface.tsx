export interface RadioButtonProps {
    value: number | string;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent) => any;
    children?: React.ReactNode;
    [x: string]: any;
}
