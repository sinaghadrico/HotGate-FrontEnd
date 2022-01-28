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
    onFocus,
    label,
    theme = "orange",
    withOutInput = false,
    ...rest
}: InputProps) => {
    const _className = className ? `ui-input ${className + " " + theme + "-theme"}` : `ui-input ${theme + "-theme"}`;
    return (
        <div className={_className} onClick={() => {
            onFocus && onFocus({ target: { name: rest?.name, value: value } })
        }}>
            {prefix && <div className="ui-input-prefix">{prefix}</div>}
            {suffix && <div className="ui-input-suffix">{suffix}</div>}
            {label && <label className={`ui-input-label ${prefix ? "right" : "left"}`}>{label}</label>}
            {!withOutInput && <input
                {...rest}
                type="string"
                className={`${prefix ? "right" : "left"}`}
                style={style}
                onChange={onChange}
                onFocus={onFocus}
                value={value}
                placeholder={placeHolder}
            />}
        </div>
    );
};
export default Input;
