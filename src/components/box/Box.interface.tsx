export interface BoxProps {
    children?: React.ReactNode;
    title: string;
    description: string;
    isLoading?: boolean;
    submitTitle?: string;
    onSubmit?: () => void;
    haveSetting?: boolean;
    typeSetting?: "normal" | "fast" | "instant"
}
