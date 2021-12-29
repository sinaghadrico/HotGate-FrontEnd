/* eslint-disable @typescript-eslint/no-empty-function */
import { FC, useState } from "react";

// import { Helmet } from "react-helmet-async";
import "./AccountManagement.scss";

import { AccountPredictor } from "./account-predictor";
import { Box } from "components/box";
import { Input } from "ui-components";
import { formatNumberWithCommas, isValidNumber, parseValueToNumber } from "utils/number";
import TokenSelector from "components/token-selector/TokenSelector";

const AccountManagement: FC = () => {
    const [form, setForm] = useState({
        amount: 0,
        inputToken: { key: "bsc", value: "BSC" },
        receivedAmount: 0,
        outputToken: { key: "bsc", value: "BSC" },
        receiverAddress: "",
    });
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
    return (
        <>
            {/* <Helmet>
                <title> Account Management </title>
                <meta name="description" content="Account Management" />
            </Helmet> */}
            <Box
                title="Exchange"
                description="Change your tokens to different tokens on the same chain."
                submitTitle="Exchange"
                haveSetting
            >
                <Input
                    prefix={
                        <TokenSelector
                            title="Input Token"
                            onChanageValue={(token: any) => {
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
                            onChanageValue={(token: any) => {
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
            </Box>
            <div className="account-management">
                <div className="row  ">
                    <div className="col-md-12 ">
                        <AccountPredictor />
                    </div>
                </div>
            </div>
        </>
    );
};
AccountManagement.defaultProps = {};
export default AccountManagement;
