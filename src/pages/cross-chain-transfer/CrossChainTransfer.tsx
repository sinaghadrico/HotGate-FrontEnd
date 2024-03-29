import { FC, useState, useEffect } from "react";
import { Box } from "components/box";
import { Input, RadioButton, RadioGroup } from "ui-components";
import { formatNumberWithCommas, isValidNumber, parseValueToNumber } from "utils/number";
import TokenSelector from "components/token-selector/TokenSelector";
import { DetailsList } from "components/details-list";
import useWebWallet from "hooks/use-web-wallet/useWebWallet";
import { Helmet } from "react-helmet-async";
import "./CrossChainTransfer.scss";

const CrossChainTransfer: FC = () => {
    const { account } = useWebWallet();
    const [form, setForm] = useState<any>({
        amount: 0,
        inputToken: { key: "bsc", value: "BSC" },
        receivedAmount: 0,
        outputToken: {},
        receiverAddress: "",
        transferType: "normal",
        deadline: 0,
        slippage: 0,
        confirmations: 20
    });
    const detailsList = [{ title: "Keeper Fee", value: "1.234556" }];

    useEffect(() => {
        setForm({
            ...form,
            receiverAddress: !form.account ? account : account,
        })
    }, [account]);

    const handleChange = (event: any) => {
        const { name, value: _value } = event.target;


        if (name === "receiverAddress" || name === "transferType") {
            setForm({ ...form, [name]: _value });
            return null
        }

        if (name === "inputToken") {
            setForm({ ...form, [name]: _value, amount: _value.balance, outputToken: {}, receivedAmount: 0 });
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
    return (
        <div className="cross-chain-transfer">
            <Helmet>
                <title> Cross-Chain Transfer </title>
                <meta name="description" content="Cross-Chain Transfer" />
            </Helmet>
            <Box
                title="Cross-Chain Transfer"
                description="Send tokens from [[Chain A]] to [[Chain B]]."
                submitTitle="Cross-Chain Transfer"
                defaultSetting={{
                    deadline: form.deadline,
                    slippage: form.slippage,
                    confirmations: form.confirmations,
                }}
                typeSetting={form.transferType}
            >
                <div className="transfer-type">
                    <span className="transfer-type-title">Exchange Type</span>
                    <RadioGroup value={form.transferType} onChange={(event: any) => event} className="row">
                        {transferTypes.map((type) => (
                            <RadioButton
                                value={type.key}
                                key={type.key}
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
                {form?.inputToken?.name && <span className="balance">Balance: {form?.inputToken.balance} {" "} {form?.inputToken.symbol} </span>}
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
export default CrossChainTransfer;
