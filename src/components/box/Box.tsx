import { Button, ButtonWidth } from "ui-components";
import { ReactComponent as SetttingLogo } from "assets/icons/svgs/setting.svg";
import { BoxProps } from "./Box.interface";

import "./Box.scss";

const Box = ({ children, title, description, submitTitle, onSubmit, onClickSetting, isLoading }: BoxProps) => {
    return (
        <div className="ui-box">
            <div className="ui-box-header">
                <div className="ui-box-header-title">{title}</div>
                <div className="ui-box-header-setting">{onClickSetting && <SetttingLogo />}</div>
            </div>
            <div className="ui-box-body">
                <div className="ui-box-body-description">{description}</div>
                {children}
            </div>
            <div className="ui-box-footer">
                <Button onClick={onSubmit} width={ButtonWidth.FIT_PARENT}>
                    {submitTitle}
                </Button>
            </div>
        </div>
    );
};
export default Box;
