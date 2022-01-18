import { FC, useState } from "react";
import { Box } from "components/box";
import { Input } from "ui-components";
import { formatNumberWithCommas, isValidNumber, parseValueToNumber } from "utils/number";
import TokenSelector from "components/token-selector/TokenSelector";
import { DetailsList } from "components/details-list";
import { Helmet } from "react-helmet-async";
import "./Exchange.scss";

const Exchange: FC = () => {
    const [form, setForm] = useState<any>({
        amount: 0,
        inputToken: { key: "bsc", value: "BSC" },
        receivedAmount: 0,
        outputToken: { key: "bsc", value: "BSC" },
        receiverAddress: "",
        transferType: "normal",
    });
    const detailsList = [
        { title: "Swap Rate", value: "1.2038475" },
        { title: "Minimum Received Amount", value: "1.234556" },
        { title: "Price Impact", value: "1.234556" },
        { title: "Fee", value: "1.234556" },
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

    return (
        <div className="exchange">
            <Helmet>
                <title> Exchange </title>
                <meta name="description" content="Exchange" />
            </Helmet>
            <Box
                title="Exchange"
                description="Change your tokens to different tokens on the same chain."
                submitTitle="Exchange"
                haveSetting
                typeSetting={form.transferType}
            >
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
                            hiddenToken={form?.inputToken}

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
export default Exchange;
