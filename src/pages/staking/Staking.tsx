import { FC, useState, useEffect } from "react";
import { Box } from "components/box";
import { Input, Tabs, Tab, TabPanel, } from "ui-components";
import useWebWallet from "hooks/use-web-wallet/useWebWallet";
import { formatNumberWithCommas, isValidNumber, parseValueToNumber } from "utils/number";
import { DetailsList } from "components/details-list";
import { useQuery, useMutation } from "react-query";
import { Helmet } from "react-helmet-async";
import "./Staking.scss";
import { useStaking } from "services/predictor/contract/useStaking";
import useNotification from "hooks/useNotification";

const Staking: FC = () => {

    const [selectedTab, setSelectedTab] = useState("stake");

    const notification = useNotification();


    const handleChangeTab = (value: any) => {
        setSelectedTab(value);
    };
    const { account } = useWebWallet();
    const staking = useStaking();

    const { data: initialData = {} } = useQuery(["getInitialDataStakling", account], () => staking.getInitialData(account || "0x00"), {
        enabled: !!staking.contract && !!account,
        refetchOnWindowFocus: false
    });
    const { rewards, stakedBalance, maxValueUnstake, apy, collateralRatio } = initialData



    const [form, setForm] = useState<any>({
        amountStake: 0,
        amountUnStake: maxValueUnstake || 0,
        recipient: account
    });

    useEffect(() => {
        setForm({
            ...form,
            amountStake: 0,
            amountUnStake: maxValueUnstake || 0,
        })
    }, [initialData]);

    const handleChange = (event: any) => {
        const { name, value: _value } = event.target;

        if (name === "recipient") {
            setForm({ ...form, [name]: _value });
            return null
        }
        const value = parseValueToNumber("" + _value);
        const isValid = isValidNumber("" + _value);

        if (isValid) {
            setForm({ ...form, [name]: value });
        }
    };










    const mutationStake = useMutation((_form: any): any => {
        return staking?.stake(_form.recipient, _form?.amount);
    });
    const mutationUnStake = useMutation((_form: any): any => {
        return staking?.unstake(_form.recipient, _form?.amount);
    });
    const mutationClaim = useMutation((_form: any): any => {
        return staking?.claim(_form.recipient);
    });

    const handleClick = () => {
        if (form.amount === 0) {
            notification.error(`Enter Input Token Amount Greater Than 0  `);
            return null
        }
        if (selectedTab === "stake") {
            if (!mutationStake?.isSuccess) {
                mutationStake.mutate(
                    form,
                    {
                        onSuccess: () => {
                            console.log("onSuccess")

                        },

                    },
                );
            }
        }
        else if (selectedTab === "unstake") {
            if (!mutationUnStake?.isSuccess) {
                mutationUnStake.mutate(
                    form,
                    {
                        onSuccess: () => {
                            console.log("onSuccess")
                        },

                    },
                );
            }
        }
        else if (selectedTab === "claim") {
            if (!mutationClaim?.isSuccess) {
                mutationClaim.mutate(
                    form,
                    {
                        onSuccess: () => {
                            console.log("onSuccess")
                        },

                    },
                );
            }
        }
    };







    return (
        <div className="staking">
            <Helmet>
                <title> Staking </title>
                <meta name="description" content="Staking" />
            </Helmet>
            <Box
                title="Staking"
                description="Stake  HotGate tokens."
                submitTitle={selectedTab}
                onSubmit={handleClick}

            >

                <div className="row">
                    <Tabs hasBorder={true} value={selectedTab} onChange={handleChangeTab}>
                        <Tab value="stake">Stake</Tab>
                        <Tab value="unstake">Unstake</Tab>
                        <Tab value="claim">Rewards</Tab>
                    </Tabs>
                    <TabPanel value={selectedTab} name="stake">
                        <Input
                            className="my-10"
                            label="Amount"
                            value={formatNumberWithCommas(form?.amount)}
                            name="amount"
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        <Input
                            className="my-10"
                            label="Receiver Address"
                            value={form?.recipient}
                            name="recipient"
                            onChange={handleChange}
                            autoComplete="off"
                        />

                    </TabPanel>
                    <TabPanel value={selectedTab} name="unstake">
                        <Input
                            className="my-10"
                            label="Amount"
                            value={formatNumberWithCommas(form?.amount)}
                            name="amount"
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        <Input
                            className="my-10"
                            label="Receiver Address"
                            value={form?.recipient}
                            name="recipient"
                            onChange={handleChange}
                            autoComplete="off"
                        />

                    </TabPanel>
                    <TabPanel value={selectedTab} name="claim">
                        <span>
                            Total Rewards :  {rewards}
                        </span>
                        <Input
                            className="my-10"
                            label="Receiver Address"
                            value={form?.recipient}
                            name="recipient"
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </TabPanel>
                </div>




                <DetailsList list={[
                    { title: "APY", value: apy },
                    { title: "Collateral Ratio", value: collateralRatio },
                    { title: "Staked Balance", value: stakedBalance },
                ]} />
            </Box>
        </div>
    );
};
export default Staking;
