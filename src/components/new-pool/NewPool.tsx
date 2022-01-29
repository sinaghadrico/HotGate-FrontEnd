import { ConfirmModal, Input } from "ui-components";

import { NewPoolProps } from "./NewPool.interface";
import { useGlobalState } from "states/globalContext";
import { useState } from "react";
import TokenSelector from "components/token-selector/TokenSelector";

import "./NewPool.scss";


import { useLiquidityPoolFactory } from "services/predictor/contract/useLiquidityPoolFactoryContract";
import usePredictorStakes from "services/predictor/api/usePredictorStakes";

import { useMutation } from "react-query";
import useNotification from "hooks/useNotification";
import { useWrappedBITCOINContract, useWETHContract } from "services/contracts";

const NewPool = ({ open, onClose, onConfirm }: NewPoolProps) => {
    const notification = useNotification();
    const deployWETHContract = useWETHContract()
    const deployWrappedBITCOINContract = useWrappedBITCOINContract()

    const { poolsFilters } = useGlobalState();
    const liquidityPoolFactory = useLiquidityPoolFactory()
    const { data, isLoading, isFetching } = usePredictorStakes(0, 10);
    const [form, setForm] = useState<any>({
        inputToken: null,
        outputToken: null,
        tokenType: "inputToken"
    });

    const mutationNewPool = useMutation((_form: any): any => {
        return liquidityPoolFactory.createLiquidityPool(_form.inputToken.address, _form.outputToken.address);
    });


    const handleNewPool = async () => {
        if (!form.inputToken || !form.outputToken) {
            notification.error(`Please Choose First And Second Token`);
            return null
        }

        const liquidityPoolExist = await liquidityPoolFactory.getLiquidityPoolAddress(form.inputToken.address, form.outputToken.address);

        if (liquidityPoolExist === "0x0000000000000000000000000000000000000000") {

            if (!mutationNewPool?.isSuccess) {
                mutationNewPool.mutate(
                    form,
                    {
                        onSuccess: () => {
                            onConfirm(form)
                        },
                    },
                );
            }

        } else {

            notification.error(`Liquidity Pool Exist`);
        }

        // deployWrappedBITCOINContract && await deployWrappedBITCOINContract.mintTestToken();
        // deployWETHContract && await deployWETHContract.mintTestToken();






    };

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        if (name === "tokenType") {
            if (value === "inputToken" && form.inputToken) {
                setForm({ ...form, [name]: value, inputToken: null, outputToken: null });
            }
            else if (value === "outputToken" && form.outputToken) {
                setForm({ ...form, [name]: value, outputToken: null });
            }
            else {
                setForm({ ...form, [name]: value });
            }
        } else {
            setForm({ ...form, [name]: value });
        }

    };

    const hiddenToken: any = form?.inputToken;

    const tokenList: any = ((hiddenToken ? data?.stakes?.filter((tokenItem): any => !tokenItem?.connectionTokens.find((i: any) => i.symbol === hiddenToken?.symbol)) || [] : (data?.stakes || [])) || [])
        .filter((i: any) => i.symbol !== form?.inputToken?.symbol)
        .filter((i: any) => i.symbol !== form?.outputToken?.symbol);



    return (
        <ConfirmModal
            width="100"
            style={{ maxWidth: "348px" }}
            title="Create New Pool"
            open={open}
            onClose={onClose}
            onCancel={onClose}
            onConfirm={handleNewPool}
            confirmTitle="Create"
            cancelTitle="Cancel"
        >
            <div className="new-pool">
                <div className="new-pool-select">
                    <Input
                        prefix={<TokenSelector title="First Token" token={form?.inputToken} />}
                        className={`my-10 ${form.tokenType === "inputToken" ? "select-input" : ""}`}
                        name="tokenType"
                        value="inputToken"
                        autoComplete="off"
                        onFocus={handleChange}
                        withOutInput={true}
                    />
                    <Input
                        prefix={<TokenSelector title="Second Token" token={form?.outputToken} />}
                        className={`my-10 ${form.tokenType === "outputToken" ? "select-input" : ""}`}
                        name="tokenType"
                        value="outputToken"
                        autoComplete="off"
                        onFocus={handleChange}
                        withOutInput={true}
                    />
                </div>



                <div className="new-pool-list">
                    <div className="new-pool-list-items">
                        {tokenList?.map((item: any) => (
                            <div
                                className="new-pool-list-item"
                                onClick={() => {
                                    handleChange({ target: { name: form?.tokenType, value: item } });
                                }}
                                key={item?.symbol?.toLowerCase()}
                            >
                                <div className="oken-selector-list-item-title">{item.symbol}</div>
                                <div className="oken-selector-list-item-value"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </ConfirmModal>
    );
};
export default NewPool;
