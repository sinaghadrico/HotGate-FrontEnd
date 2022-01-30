import { FC, useState } from "react";
import { Box } from "components/box";
import { Input, Tabs, Tab, TabPanel, } from "ui-components";
import useWebWallet from "hooks/use-web-wallet/useWebWallet";
import { formatNumberWithCommas, isValidNumber, parseValueToNumber } from "utils/number";
import { DetailsList } from "components/details-list";
import { useQuery, useMutation } from "react-query";
import { Helmet } from "react-helmet-async";
import "./Staking.scss";
import { useInstantRouter } from "services/predictor/contract/useInstantRouter";
import useNotification from "hooks/useNotification";

const Staking: FC = () => {

    const [selectedTab, setSelectedTab] = useState("stake");

    const notification = useNotification();


    const handleChangeTab = (value: any) => {
        setSelectedTab(value);
    };
    const { account } = useWebWallet();
    const istantRouter = useInstantRouter();
    const [form, setForm] = useState<any>({
        amount: 0,
    });

    const handleChange = (event: any) => {
        const { name, value: _value } = event.target;

        const value = parseValueToNumber("" + _value);
        const isValid = isValidNumber("" + _value);

        if (isValid) {
            setForm({ ...form, [name]: value });
        }
    };




    const { data: HotGateToken } = useQuery(["HotGateToken", account], () => istantRouter.getHotGateToken(), {
        enabled: !!istantRouter.contract,
        refetchOnWindowFocus: false
    });

    const { data: totalLockedHGT } = useQuery(["totalLockedHGT", account], () => istantRouter.getTotalLockedHGT(), {
        enabled: !!istantRouter.contract,
        refetchOnWindowFocus: false
    });
    const { data: lockedHGT } = useQuery(["lockedHGT", account], () => istantRouter.getLockedHGT(account || "0x00"), {
        enabled: !!istantRouter.contract,
        refetchOnWindowFocus: false
    });
    const { data: collateralRatio } = useQuery(["collateralRatio", account], () => istantRouter.getCollateralRatio(), {
        enabled: !!istantRouter.contract,
        refetchOnWindowFocus: false
    });




    const mutationStake = useMutation((_form: any): any => {
        return istantRouter?.lockHGT(_form?.amount);
    });
    const mutationUnStake = useMutation((_form: any): any => {
        return istantRouter?.unlockHGT(_form?.amount);
    });
    const mutationClaim = useMutation((_form: any): any => {
        return istantRouter?.withdraw(_form.receiverAddress, _form?.amount);
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




    const APY = 0;
    // const collateralRatio = 0;
    const stakedBalance = 0;


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

                    </TabPanel>
                    <TabPanel value={selectedTab} name="claim">


                    </TabPanel>
                </div>




                <DetailsList list={[
                    { title: "APY", value: APY },
                    { title: "Collateral Ratio", value: collateralRatio },
                    { title: "Staked Balance", value: stakedBalance },
                ]} />
            </Box>
        </div>
    );
};
export default Staking;
