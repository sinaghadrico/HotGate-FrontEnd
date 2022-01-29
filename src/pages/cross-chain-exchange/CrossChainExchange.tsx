import { FC, useState } from "react";
import { Box } from "components/box";
import { Input, RadioButton, RadioGroup, Tooltip, TooltipPosition } from "ui-components";
import { formatNumberWithCommas, isValidNumber, parseValueToNumber } from "utils/number";
import TokenSelector from "components/token-selector/TokenSelector";
import { DetailsList } from "components/details-list";
import { Helmet } from "react-helmet-async";
import { Icon } from "components/icon";
import useWebWallet from "hooks/use-web-wallet/useWebWallet";
import { useExchangeRouter } from "services/predictor/contract/useExchangeRouter";
import { useQuery, useMutation } from "react-query";
import info_logo from "assets/icons/svgs/info.svg";
import "./CrossChainExchange.scss";

const CrossChainExchange: FC = () => {
    const { account } = useWebWallet();
    const exchangeRouter = useExchangeRouter();

    const { data: wrappedBitcoinAddress } = useQuery(["wrappedBitcoinAddress"], () => exchangeRouter.getWrappedBitcoinAddress(), {
        enabled: !!exchangeRouter.contract,
    });

    const [form, setForm] = useState<any>({
        amount: 0,
        inputToken: { symbol: "BTC" },
        receivedAmount: 0,
        outputToken: { symbol: "BSC" },
        receiverAddress: "",
        transferType: "normal",
        deadline: 0,
        slippage: 0,
        confirmations: 20
    });
    const detailsList = [
        { title: "Swap Rate", value: "1.2038475" },
        { title: "Minimum Received Amount", value: "1.234556" },
        { title: "Price Impact", value: "1.234556" },
        {
            title: <Tooltip description={<div className="list-tooltip">
                <span className="list-tooltip-item">
                    <span className="list-tooltip-item-title">Kepper Fee</span>
                    <span className="list-tooltip-item-value">1.2345</span>
                </span>
                <span className="list-tooltip-item">
                    <span className="list-tooltip-item-title">Exchange Fee</span>
                    <span className="list-tooltip-item-value">1.2345</span>
                </span>
            </div>} position={TooltipPosition.DOWN}>
                Fees <Icon src={info_logo} />
            </Tooltip>, value: "1.234556"
        },
        { title: "Tx Status", value: "mined" }
    ];
    const handleChange = (event: any) => {
        const { name, value: _value } = event.target;


        if (name === "receiverAddress" || name === "transferType") {
            setForm({ ...form, [name]: _value });
            return null
        }

        if (name === "inputToken") {
            setForm({ ...form, [name]: _value, amount: _value.balance, outputToken: { key: "bsc", value: "BSC" }, receivedAmount: 0 });
            return null
        }
        if (name === "outputToken") {
            setForm({ ...form, [name]: _value, receivedAmount: _value.balance });
            return null
        }


        const value = parseValueToNumber("" + _value);
        const isValid = isValidNumber("" + _value);

        if (isValid) {
            setForm({ ...form, [name]: value });
        }

    };
    const transferTypes = [
        { value: "Normal", key: "normal" },
        { value: "Fast", key: "fast" },
        { value: "Instant", key: "instant" },
    ];

    const outputTokenHidden = { symbol: "HWBTC" };
    return (
        <div className="cross-chain-exchange">
            <Helmet>
                <title> Cross-Chain Exchange </title>
                <meta name="description" content="Cross-Chain Exchange" />
            </Helmet>
            <Box
                title="Cross-Chain Exchange"
                description="Exchange tokens from [[Chain A]] to tokens in [[Chain B]]"
                submitTitle="Cross-Chain Exchange"
                defaultSetting={{
                    deadline: form.deadline,
                    slippage: form.slippage,
                    confirmations: form.confirmations,
                }}
                typeSetting={form.transferType}
            >
                <div className="transfer-type">
                    <div className="transfer-type-title">Exchange Type</div>
                    <RadioGroup value={form.transferType} onChange={(event: any) => event} className="row">
                        {transferTypes.map((type) => (
                            <RadioButton
                                value={type.key}
                                key={type.value}
                                onClick={handleChange}
                                className="col-md-2"
                                style={{ width: "fit-content" }}
                                name="transferType"
                            >
                                {type.value}
                            </RadioButton>
                        ))}
                    </RadioGroup>
                </div>

                <Input
                    prefix={
                        <TokenSelector
                            title="Input Token"
                            token={form?.inputToken}
                        />
                    }
                    className="my-10"
                    label="Amount"
                    value={formatNumberWithCommas(form?.amount)}
                    name="amount"
                    onChange={handleChange}
                    autoComplete="off"
                />
                {form?.inputToken?.name && <span className="balance">Balance: {form?.inputToken.balance} {" "} {form?.inputToken.symbol} </span>}
                <Input
                    prefix={
                        <TokenSelector
                            title="Output Token"
                            onChangeValue={(token: any) => {
                                handleChange({ target: { name: "outputToken", value: token } });
                            }}
                            hiddenToken={outputTokenHidden}
                            token={form?.outputToken}
                        />
                    }
                    className="my-10"
                    label="Expected Received Amount"
                    value={formatNumberWithCommas(form?.receivedAmount)}
                    name="receivedAmount"
                    onChange={handleChange}
                    autoComplete="off"
                />
                <Input
                    className="my-10"
                    label="Receiver Address"
                    value={form?.receiverAddress}
                    name="receiverAddress"
                    onChange={handleChange}
                    autoComplete="off"
                />

                <DetailsList list={detailsList} />
            </Box>
        </div>
    );
};
export default CrossChainExchange;
