import { InputProps } from "./Input.interface";
import "./Input.scss";

const Input = ({
    value,
    prefix,
    suffix,
    style,
    className,
    placeHolder,
    onChange,
    label,
    theme = "orange",
    ...rest
}: InputProps) => {
    const _className = className ? `ui-input ${className + " " + theme + "-theme"}` : `ui-input ${theme + "-theme"}`;
    return (
        <div className={_className}>
            {prefix && <div className="ui-input-prefix">{prefix}</div>}
            {suffix && <div className="ui-input-suffix">{suffix}</div>}
            {label && <label className={`ui-input-label ${prefix ? "right" : "left"}`}>{label}</label>}
            <input
                {...rest}
                type="string"
                className={`${prefix ? "right" : "left"}`}
                style={style}
                onChange={onChange}
                value={value}
                placeholder={placeHolder}
            />
        </div>
    );
};
export default Input;
