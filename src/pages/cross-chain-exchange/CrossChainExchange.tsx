import { FC, useState } from "react";
import { Box } from "components/box";
import { Input, RadioButton, RadioGroup } from "ui-components";
import { formatNumberWithCommas, isValidNumber, parseValueToNumber } from "utils/number";
import TokenSelector from "components/token-selector/TokenSelector";
import { DetailsList } from "components/details-list";
import { Helmet } from "react-helmet-async";
import "./CrossChainExchange.scss";

const CrossChainExchange: FC = () => {
    const [form, setForm] = useState({
        amount: 0,
        inputToken: { key: "bsc", value: "BSC" },
        receivedAmount: 0,
        outputToken: { key: "bsc", value: "BSC" },
        receiverAddress: "",
        transferType: 0,
    });
    const detailsList = [
        { title: "Swap Rate", value: "1.2038475" },
        { title: "Minimum Received Amount", value: "1.234556" },
        { title: "Price Impact", value: "1.234556" },
        { title: "Fees", value: "1.234556" },
    ];
    const handleChange = (event: any) => {
        const { name, value: _value } = event.target;
        const value = parseValueToNumber("" + _value);
        const isValid = isValidNumber("" + _value);

        if (name === "receiverAddress" || name === "inputToken" || name === "outputToken") {
            setForm({ ...form, [name]: _value });
        }
        if (isValid) {
            setForm({ ...form, [name]: value });
        }
    };
    const transferTypes = [
        { value: "Normal", key: 0 },
        { value: "Fast", key: 1 },
        { value: "Instant", key: 2 },
    ];
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
                haveSetting
            >
                <div className="transfer-type">
                    <div className="transfer-type-title">Transfer Type</div>
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
                            onChangeValue={(token: any) => {
                                handleChange({ target: { name: "inputToken", value: token } });
                            }}
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
                <Input
                    prefix={
                        <TokenSelector
                            title="Output Token"
                            onChangeValue={(token: any) => {
                                handleChange({ target: { name: "outputToken", value: token } });
                            }}
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
