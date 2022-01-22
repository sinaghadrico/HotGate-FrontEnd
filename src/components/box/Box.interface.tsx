export interface BoxProps {
    children?: React.ReactNode;
    title: string;
    description: string;
    isLoading?: boolean;
    submitTitle?: string;
    onSubmit?: () => void;
    onChangeSetting?: (form: any) => void;
    defaultSetting?: any;
    typeSetting?: "normal" | "fast" | "instant"
}
