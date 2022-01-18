/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Button, ButtonForm, ButtonWidth } from "ui-components";
import { PoolBoxProps } from "./PoolBox.interface";
import { PairCoin } from "components/pair-coin";
import { Deposit } from "components/deposit";
import { Withdraw } from "components/withdraw";
import "./PoolBox.scss";
import { useState } from "react";

const PoolBox = ({ data }: PoolBoxProps) => {
    const [openDeposit, setOpenDeposit] = useState(false);
    const [openWithdraw, setOpenWithdraw] = useState(false);
    const { title, inputToken, outputToken, tvl, volume } = data;

    const handelWithdraw = () => { };
    const handelDeposit = () => { };
    return (
        <>
            <div className="pool-box">
                <div className="pool-box-header">
                    <div className="predictor-pool-box-header-logo">
                        <PairCoin subCoin={inputToken?.symbol} supCoin={outputToken?.symbol} />
                    </div>
                    <div className="pool-box-header-title">{title}</div>
                </div>
                <div className="pool-box-body">
                    <div className="pool-box-body-item">
                        <div className="pool-box-body-item-title">
                            <PairCoin subCoin={inputToken?.symbol} />
                            {inputToken?.title} Amount
                        </div>
                        <div className="pool-box-body-item-value">{inputToken?.amount}</div>
                    </div>
                    <div className="pool-box-body-item">
                        <div className="pool-box-body-item-title">
                            <PairCoin subCoin={outputToken?.symbol} />
                            {outputToken?.title} Amount
                        </div>
                        <div className="pool-box-body-item-value">{outputToken?.amount}</div>
                    </div>
                    <div className="pool-box-body-item">
                        <div className="pool-box-body-item-title">TVL</div>
                        <div className="pool-box-body-item-value">{tvl}</div>
                    </div>
                    <div className="pool-box-body-item">
                        <div className="pool-box-body-item-title">Volume (24h)</div>
                        <div className="pool-box-body-item-value">{volume}</div>
                    </div>
                </div>
                <div className="pool-box-footer">
                    <Button
                        onClick={() => setOpenDeposit(true)}
                        width={ButtonWidth.FIT_PARENT}
                        buttonForm={ButtonForm.SECONDARY_HIGH}
                    >
                        Deposit
                    </Button>
                    <Button
                        onClick={() => setOpenWithdraw(true)}
                        width={ButtonWidth.FIT_PARENT}
                        buttonForm={ButtonForm.SIMPLE_OUTLINED}
                    >
                        Withdraw
                    </Button>
                </div>
            </div>
            {openDeposit && (
                <Deposit
                    open={openDeposit}
                    data={data}
                    onClose={() => setOpenDeposit(false)}
                    onConfirm={() => setOpenDeposit(false)}
                />
            )}
            {openWithdraw && (
                <Withdraw
                    open={openWithdraw}
                    data={data}
                    onClose={() => setOpenWithdraw(false)}
                    onConfirm={() => setOpenWithdraw(false)}
                />
            )}
        </>
    );
};
export default PoolBox;
