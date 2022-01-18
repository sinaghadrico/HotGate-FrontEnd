import { Button, ButtonWidth } from "ui-components";
import { ReactComponent as SettingLogo } from "assets/icons/svgs/setting.svg";
import { BoxProps } from "./Box.interface";

import "./Box.scss";
import { useState } from "react";
import { AdvancedSettings } from "components/advanced-settings";

const Box = ({ children, title, description, submitTitle, onSubmit, haveSetting, typeSetting = "normal", isLoading }: BoxProps) => {
    const [openSetting, setOpenSetting] = useState(false);
    return (
        <>
            <div className="ui-box">
                <div className="ui-box-header">
                    <div className="ui-box-header-title">{title}</div>
                    <div className="ui-box-header-setting" title="Advanced Settings">
                        {haveSetting && <SettingLogo onClick={() => setOpenSetting(true)} />}
                    </div>
                </div>
                <div className="ui-box-body">
                    <div className="ui-box-body-description">{description}</div>
                    {children}
                </div>
                <div className="ui-box-footer">
                    <Button onClick={onSubmit} width={ButtonWidth.FIT_PARENT}>
                        {isLoading ? "please wait ..." : submitTitle}
                    </Button>
                </div>
            </div>
            {openSetting && (
                <AdvancedSettings
                    open={openSetting}
                    onClose={() => setOpenSetting(false)}
                    onConfirm={() => setOpenSetting(false)}
                    type={typeSetting}
                />
            )}
        </>
    );
};
export default Box;
