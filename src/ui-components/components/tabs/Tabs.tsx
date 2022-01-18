import classnames from "classnames";
import React from "react";
import "./Tabs.scss";

interface Props {
    children: React.ReactNode;
    value?: any;
    onChange: any;
    style?: object;
    className?: string;
    hasBorder?: boolean;
}
const Tabs = ({ children, value, onChange, style, className, hasBorder }: Props) => {

    const _children = React.Children.map(children, (child: any) => {

        const selected = child?.props?.value === value;

        return React.cloneElement(child, {
            onChange: onChange,
            value: child?.props?.value,
            selected,
            hasBorder,
        });
    });
    return (
        <div style={style} className={classnames("ui-tabs", className)}>
            {" "}
            {_children}{" "}
        </div>
    );
};
export default Tabs;
