export interface BoxProps {
    children?: React.ReactNode;
    title: string;
    description: string;
    isLoading?: boolean;
    submitTitle?: string;
    onSubmit?: () => void;
    onClickSetting?: () => void;
}
