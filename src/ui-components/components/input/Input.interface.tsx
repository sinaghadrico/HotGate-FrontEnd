export interface InputProps {
    value: any;
    label?: string;
    prefix?: any;
    suffix?: any;
    onChange?: (e: any) => void;
    onFocus?: (e: any) => void;
    [x: string]: any;
    className?: string;
    style?: object;
    placeHolder?: any;
    theme?: string;
    haveDropdown?: boolean;
    withOutInput?: boolean;
}
