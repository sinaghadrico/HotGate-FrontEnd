/* eslint-disable @typescript-eslint/no-unused-vars */
import { BigNumberish, ContractTransaction } from "ethers";
import useWebWallet, { getErrorMessage } from "hooks/use-web-wallet/useWebWallet";
import useNotification from "hooks/useNotification";
import { parseTokenValue, toPriceValue, toTokenValue } from "utils/convert";
import { WrappedERC20Token__factory } from "contracts/types";
import { useQueryClient } from 'react-query';
import { useStakingContract } from "services/contracts";

export const useStaking = () => {
    const { library, account } = useWebWallet();
    const notification = useNotification();
    const contractMethod: any = useStakingContract();
    const queryClient = useQueryClient();

    //write-contract


    const stake = async (user: string, _amount: string) => {
        const amount = toTokenValue(_amount);

        const address = process.env.REACT_APP_TELEPORTDAO_TOKEN_ADDRESS || "0x00";
        try {
            await approve(address, contractMethod.address, amount)
            contractMethod
                ?.stake(user, amount)
                .then((transaction: ContractTransaction) => {

                    transaction.wait(1).then(() => {
                        notification.success("Stake confirmed");
                        queryClient.invalidateQueries(`getInitialDataStaking`);
                    });
                })
                .catch((error: any) => {
                    notification.error(getErrorMessage(error));
                });
        } catch (error) {
            notification.error(getErrorMessage(error));
        }

    };
    const unstake = (user: string, _amount: string) => {
        const amount = toTokenValue(_amount);
        return new Promise((resolve: (response: any) => void, reject) => {
            contractMethod
                ?.unstake(user, amount)
                .then((transaction: ContractTransaction) => {
                    transaction.wait(1).then(() => {
                        notification.success("Unstake confirmed");
                        queryClient.invalidateQueries(`getInitialDataStaking`);
                        resolve(transaction);
                    });
                })
                .catch((error: any) => {
                    notification.error(getErrorMessage(error));
                    reject(error);
                });
        });
    };
    const claim = async (user: string) => {

        try {

            contractMethod
                ?.claimReward(user)
                .then((transaction: ContractTransaction) => {

                    transaction.wait(1).then(() => {
                        notification.success("Claim confirmed");
                        queryClient.invalidateQueries(`getInitialDataStaking`);
                    });
                })
                .catch((error: any) => {
                    notification.error(getErrorMessage(error));
                });
        } catch (error) {
            notification.error(getErrorMessage(error));
        }

    };



    //read contract


    const getTeleportDAOToken = async () => {
        return contractMethod
            .TeleportDAOToken()
            .then((data: any) => {
                debugger;
                return data

            })
            .catch((error: any) => {

                notification.error(getErrorMessage(error));
            });
    };
    const getTotalStakingShare = async () => {
        return contractMethod
            .totalStakingShare()
            .then((data: any) => {
                debugger;
                return parseTokenValue(data)

            })
            .catch((error: any) => {

                notification.error(getErrorMessage(error));
            });
    };

    // max value use on unstake
    const getStakingShare = async (user: string) => {
        return contractMethod
            .stakingShare(user)
            .then((data: any) => {
                debugger;
                return parseTokenValue(data)

            })
            .catch((error: any) => {

                notification.error(getErrorMessage(error));
            });
    };
    // staked balance  
    const getStakedAmount = async (user: string) => {
        return contractMethod
            .stakedAmount(user)
            .then((data: any) => {
                debugger;
                return parseTokenValue(data)

            })
            .catch((error: any) => {

                notification.error(getErrorMessage(error));
            });
    };
    // rewards
    const getEarnedTDT = async (user: string) => {
        return contractMethod
            .earnedTDT(user)
            .then((data: any) => {
                debugger;
                return parseTokenValue(data)

            })
            .catch((error: any) => {

                notification.error(getErrorMessage(error));
            });
    };

    const getInitialData = async (user: string): Promise<any> => {


        const stakedBalance: any = await getStakedAmount(user);
        const maxValueUnstake: any = await getStakingShare(user);
        const apy = 5;
        const collateralRatio = 200;
        const rewards: any = await getEarnedTDT(user);

        return { rewards, stakedBalance, maxValueUnstake, apy, collateralRatio };
    };

    const approve = async (tokenContractAddress: string, cntractAddress: string, amount: BigNumberish) => {

        const signer: any = library?.getSigner();
        if (signer && account) {

            const deployedERC20 = WrappedERC20Token__factory.connect(tokenContractAddress, signer);

            const currentAllowance: any = await deployedERC20.allowance(account, cntractAddress)

            if (parseTokenValue(amount) > parseTokenValue(currentAllowance)) {
                const neededAllowance = amount;

                try {
                    const approvTx: ContractTransaction = await deployedERC20.approve(cntractAddress, neededAllowance);
                    await approvTx.wait(1);
                } catch (error) {
                    notification.error(getErrorMessage(error));
                }

            }
        }


    }

    //how to use
    // const { data: startDate, loading } = useQuery("StartDate", () => getStartDate());

    return {
        claim,
        stake,
        unstake,
        approve,

        getTeleportDAOToken,
        getTotalStakingShare,
        getStakingShare,
        getStakedAmount,
        getEarnedTDT,


        getInitialData,

        contract: contractMethod || undefined,
    };
};
