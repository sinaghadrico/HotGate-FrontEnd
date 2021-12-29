import { Modal, Input } from "ui-components";

import { TokenSelectorProps } from "./TokenSelector.interface";
import { ReactComponent as ExpandLogo } from "assets/icons/svgs/expand.svg";
import { ReactComponent as SearchLogo } from "assets/icons/svgs/search.svg";
import "./TokenSelector.scss";
import { useState } from "react";
import { isValidNumber, parseValueToNumber } from "utils/number";

const TokenSelector = ({ onChanageValue, title = "Input Token", token }: TokenSelectorProps) => {
    const [openSelector, setOpenSelector] = useState(false);
    const [form, setForm] = useState({ search: null });
    const handleChange = (event: any) => {
        const { name, value: _value } = event.target;
        const __value = parseValueToNumber("" + _value);
        const isValid = isValidNumber("" + _value);

        if (isValid) {
            setForm({ ...form, [name]: __value });
        }
    };

    const tokenList = [
        { key: "bsc", value: "BSC", balance: 0 },
        { key: "bnb", value: "BNB", balance: 0 },
        { key: "bsc", value: "BSC", balance: 0 },
        { key: "bsc", value: "BSC", balance: 0 },
        { key: "bsc", value: "BSC", balance: 0 },
        { key: "bsc", value: "BSC", balance: 0 },
        { key: "bsc", value: "BSC", balance: 0 },
        { key: "bsc", value: "BSC", balance: 0 },
        { key: "bsc", value: "BSC", balance: 0 },
        { key: "bsc", value: "BSC", balance: 0 },
    ];
    return (
        <>
            <div className="token-selector">
                <div className="token-selector-title">{title}</div>
                <div
                    className="token-selector-value mt-5"
                    onClick={() => {
                        setOpenSelector(true);
                    }}
                >
                    {token?.value}
                    <span className="token-selector-expand">
                        <ExpandLogo width={40} height={40} />
                    </span>
                </div>
            </div>

            {openSelector && (
                <Modal
                    width="100"
                    style={{ maxWidth: "400px" }}
                    title={title}
                    open={openSelector}
                    onClose={() => {
                        setOpenSelector(false);
                    }}
                >
                    <Input
                        className="my-10"
                        placeHolder="Search"
                        suffix={<SearchLogo width={17} height={17} />}
                        value={form?.search}
                        name="search"
                        onChange={handleChange}
                        autoComplete="off"
                        style={{ padding: "5px 10px" }}
                    />
                    <div className="token-selector-list">
                        <div className="token-selector-list-title">
                            <span>{title}</span>
                            <span>Balance</span>
                        </div>
                        <div className="token-selector-list-items">
                            {tokenList?.map((item) => (
                                <div
                                    className="token-selector-list-item"
                                    onClick={() => {
                                        onChanageValue(item);
                                        setOpenSelector(false);
                                    }}
                                    key={item.key}
                                >
                                    <div className="oken-selector-list-item-title">{item.value}</div>
                                    <div className="oken-selector-list-item-value">{item.balance}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
};
export default TokenSelector;
