/* eslint-disable @typescript-eslint/no-empty-function */
import { Modal, Input, Tabs, Tab, TabPanel, Button, ButtonWidth } from "ui-components";

import { TokenSelectorProps } from "./TokenSelector.interface";
import { ReactComponent as ExpandLogo } from "assets/icons/svgs/expand.svg";
import { ReactComponent as SearchLogo } from "assets/icons/svgs/search.svg";
import "./TokenSelector.scss";
import { useState } from "react";

const TokenSelector = ({ onChanageValue, title = "Input Token", token }: TokenSelectorProps) => {
    const [openSelector, setOpenSelector] = useState(false);
    const [form, setForm] = useState({ search: null, contractAddress: "" });
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event: any) => {
        const { name, value: _value } = event.target;
        setForm({ ...form, [name]: _value });
    };

    const handleChangeTab = (value: number) => {
        setSelectedTab(value);
    };

    const handleAddToken = () => {};

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
                    <Tabs hasBorder={true} value={selectedTab} onChange={handleChangeTab}>
                        <Tab>ERC-20</Tab>
                        <Tab>Add Token</Tab>
                    </Tabs>
                    <TabPanel value={selectedTab} index={0}>
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
                    </TabPanel>
                    <TabPanel value={selectedTab} index={1}>
                        <Input
                            className="my-10"
                            label="Contract Address"
                            value={form?.contractAddress}
                            name="contractAddress"
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        <div className="token-add-placholder"></div>
                        <div className="token-add-fotter">
                            <Button onClick={handleAddToken} width={ButtonWidth.FIT_PARENT}>
                                Add Token
                            </Button>
                        </div>
                    </TabPanel>
                </Modal>
            )}
        </>
    );
};
export default TokenSelector;
