import { FC, useState } from "react";
import { Box } from "components/box";
import { Input } from "ui-components";
import useWebWallet from "hooks/use-web-wallet/useWebWallet";
import { formatNumberWithCommas, isValidNumber, parseValueToNumber } from "utils/number";
import TokenSelector from "components/token-selector/TokenSelector";
import { DetailsList } from "components/details-list";
import { useQuery, useMutation } from "react-query";
import { Helmet } from "react-helmet-async";
import "./Exchange.scss";
import { useExchangeRouter } from "services/predictor/contract/useExchangeRouter";

const Exchange: FC = () => {
    const { account } = useWebWallet();
    const exchangeRouter = useExchangeRouter();
    const [form, setForm] = useState<any>({
        amount: 0,
        inputToken: { symbol: "BSC" },
        receivedAmount: 0,
        outputToken: { symbol: "BSC" },
        receiverAddress: account,
        transferType: "normal",
    });

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

    const { data: amountOut } = useQuery(["amountOut", account, form], () => exchangeRouter.getAmountOut(form?.amount, form?.inputToken?.amount, form?.outputToken?.amount), {
        enabled: !!exchangeRouter.contract,
    });



    const mutationSwap = useMutation((_form: any): any => {
        return exchangeRouter?.swapExactTokensForTokens(_form?.inputToken.address, _form?.outputToken.address, _form?.amount, amountOut);
    });

    const handleSwap = () => {
        if (!mutationSwap?.isSuccess) {
            mutationSwap.mutate(
                form,
                {
                    // onSuccess: () => { },
                },
            );
        }
    };


    const swapRate = amountOut / form?.amount;

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
                onSubmit={handleSwap}
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
                    value={formatNumberWithCommas(amountOut)}
                    name="receivedAmount"
                    onChange={handleChange}
                    autoComplete="off"
                    readOnly

                />
                <Input
                    className="my-10"
                    label="Receiver Address"
                    value={form?.receiverAddress}
                    name="receiverAddress"
                    onChange={handleChange}
                    autoComplete="off"
                    readOnly
                />

                <DetailsList list={[
                    { title: "Swap Rate", value: swapRate },
                    { title: "Minimum Received Amount", value: amountOut },
                    { title: "Price Impact", value: "1.234556" },
                    { title: "Fee", value: "%0.3" }
                ]} />
            </Box>
        </div>
    );
};
export default Exchange;
