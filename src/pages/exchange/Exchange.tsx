import { FC, useState, useEffect } from "react";
import { Box } from "components/box";
import { Input } from "ui-components";
import useWebWallet from "hooks/use-web-wallet/useWebWallet";
import { formatNumberWithCommas, isValidNumber, parseValueToNumber } from "utils/number";
import TokenSelector from "components/token-selector/TokenSelector";
import { DetailsList } from "components/details-list";
import { useQuery, useMutation } from "react-query";
import { Helmet } from "react-helmet-async";
import useDebounce from "hooks/useDebounce";
import "./Exchange.scss";
import { useExchangeRouter } from "services/predictor/contract/useExchangeRouter";

const Exchange: FC = () => {
    const { account } = useWebWallet();
    const exchangeRouter = useExchangeRouter();
    const [form, setForm] = useState<any>({
        amount: 0,
        inputToken: {},
        receivedAmount: 0,
        outputToken: {},
        receiverAddress: account,
        transferType: "normal",
        deadline: 1200,
        slippage: 0,
        confirmations: 20
    });

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

    useEffect(() => {
        setForm({
            ...form,
            receiverAddress: !form.account ? account : account,
        })
    }, [account]);

    const debouncedSearch = useDebounce(form?.amount, 500);
    const { error, data: amountOut } = useQuery(["amountOut", account, debouncedSearch, form?.outputToken], () => exchangeRouter.getAmountOut(form?.amount, form?.inputToken?.amount, form?.outputToken?.amount), {
        enabled: !!exchangeRouter.contract && !!form?.inputToken.symbol && !!form?.outputToken.symbol,
        refetchOnWindowFocus: false
    });



    const mutationSwap = useMutation((_form: any): any => {
        return exchangeRouter?.swapExactTokensForTokens(_form?.inputToken.address, _form?.outputToken.address, _form?.amount, amountOut, _form?.receiverAddress, _form.deadline);
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
    const handleChangeSetting = (settings: any) => {
        setForm({ ...form, ...settings });
    };




    const expectedReceivedAmount = amountOut
    // const swapRate = expectedReceivedAmount / form?.amount;
    const currentswapRate = form?.inputToken.amount / form?.outputToken.amount;
    const minimumReceivedAmount = expectedReceivedAmount * (1 - form?.slippage / 100);
    const newSwapRate = (form?.amount + form?.inputToken.amount) / (form?.outputToken.amount - amountOut);
    const priceImpact = (newSwapRate - currentswapRate) / (currentswapRate) * 100;

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
                defaultSetting={{
                    deadline: form.deadline,
                    slippage: form.slippage,
                    confirmations: form.confirmations,
                }}
                typeSetting={form.transferType}
                onSubmit={handleSwap}
                onChangeSetting={handleChangeSetting}
                isLoading={mutationSwap?.isLoading}
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
                <span className="alert-error"><>{error}</></span>
                {form?.inputToken?.name && <span className="balance">Balance: {form?.inputToken.balance} {" "} {form?.inputToken.symbol} </span>}
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
                    value={formatNumberWithCommas(expectedReceivedAmount)}
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
                    { title: "Swap Rate", value: currentswapRate || 0 },
                    { title: "Minimum Received Amount", value: minimumReceivedAmount || 0 },
                    { title: "Price Impact", value: priceImpact || 0 },
                    { title: "Fee", value: "%0.3" }
                ]} />
            </Box>
        </div>
    );
};
export default Exchange;
