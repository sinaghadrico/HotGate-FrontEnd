/* eslint-disable @typescript-eslint/no-empty-function */
import { Modal, Input, Tabs, Tab, TabPanel, Button, ButtonWidth } from "ui-components";

import { TokenSelectorProps } from "./TokenSelector.interface";
import { ReactComponent as ExpandLogo } from "assets/icons/svgs/expand.svg";
import { ReactComponent as SearchLogo } from "assets/icons/svgs/search.svg";

import usePredictorStakes from "services/predictor/api/usePredictorStakes";
import useNotification from "hooks/useNotification";
import { useLiquidityPoolFactory } from "services/predictor/contract/useLiquidityPoolFactoryContract";
import "./TokenSelector.scss";
import { useState } from "react";
import { getErrorMessage } from "hooks/use-web-wallet/useWebWallet";

const TokenSelector = ({ onChangeValue, title = "Input Token", token, hiddenToken }: TokenSelectorProps) => {
    const [openSelector, setOpenSelector] = useState(false);
    const [form, setForm] = useState<any>({ search: "", contractAddress: "", token: null });
    const [selectedTab, setSelectedTab] = useState("list");
    const notification = useNotification();
    const liquidityPoolFactory = useLiquidityPoolFactory()
    const { data, isLoading, isFetching } = usePredictorStakes(0, 10);

    const handleChange = async (event: any) => {
        const { name, value } = event.target;

        if (name === "contractAddress" && (form.token || value?.length === 42)) {
            form.token && setForm({ ...form, [name]: value, token: null });
            value?.length === 42 && await getToken(value)

        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleChangeTab = (value: any) => {
        setSelectedTab(value);
    };

    const getToken = async (address: string) => {

        const haveToken = data?.stakes?.some((tokenItem): any => tokenItem?.address?.toLowerCase() === address?.toLowerCase())

        if (haveToken) {
            notification.error(` Token Exist In List`);
            setForm({ ...form, contractAddress: address });
        } else {

            try {
                const dataToken = await liquidityPoolFactory.getToken(address?.toLowerCase())

                setForm({ ...form, token: dataToken, contractAddress: address });
            } catch (error) {
                notification.error(getErrorMessage(error));
            }
        }
    };
    const handleAddToken = () => {
        if (form?.token) {
            onChangeValue && onChangeValue(form?.token);
            setOpenSelector(false);
        }
    };

    const tokenList: any = ((hiddenToken ? data?.stakes?.find((tokenItem): any => tokenItem?.symbol === hiddenToken?.symbol)?.connectionTokens || [] : (data?.stakes || [])) || []);

    return (
        <>
            <div className="token-selector">
                <div className="token-selector-title">{title}</div>
                <div
                    className="token-selector-value mt-5"
                    onClick={() => {
                        onChangeValue && setOpenSelector(true);
                    }}
                >
                    <span>{token?.symbol}</span>
                    <span className="token-selector-expand">
                        {onChangeValue && <ExpandLogo width={40} height={40} />}
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
                        <Tab value="list">ERC-20</Tab>
                        <Tab value="add">Add Token</Tab>
                    </Tabs>
                    <TabPanel value={selectedTab} name="list">
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

                                {tokenList?.filter((token: any) => token?.symbol?.toLowerCase()?.includes(form?.search?.toLowerCase()))?.map((item: any) => (
                                    <div
                                        className="token-selector-list-item"
                                        onClick={() => {
                                            onChangeValue && onChangeValue(item);
                                            setOpenSelector(false);
                                        }}
                                        key={item?.symbol?.toLowerCase()}
                                    >
                                        <div className="oken-selector-list-item-title">{item.symbol}</div>
                                        <div className="oken-selector-list-item-value">{item.balance}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={selectedTab} name="add">
                        <Input
                            className="my-10"
                            label="Contract Address"
                            value={form?.contractAddress}
                            name="contractAddress"
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        <div className="token-add-placholder">
                            <div className="token-add-placholder-symbol"> {form?.token?.symbol}   </div>
                            <div className="token-add-placholder-name">   {form?.token?.name} </div>
                        </div>
                        <div className="token-add-fotter">
                            <Button onClick={handleAddToken} width={ButtonWidth.FIT_PARENT} disabled={!form?.token}>
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
