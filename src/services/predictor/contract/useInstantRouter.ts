import { BigNumber } from '@ethersproject/bignumber';
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { BigNumberish, ContractTransaction } from "ethers";
import useWebWallet, { getErrorMessage } from "hooks/use-web-wallet/useWebWallet";
import { parseTokenValue, toTokenValue, parseValue } from "utils/convert";
import useNotification from "hooks/useNotification";
import { WrappedERC20Token__factory, InstantPool__factory, LiquidityPool__factory } from "contracts/types";
import { useInstantRouterContract } from "services/contracts";
import { useQueryClient } from 'react-query';

export const useInstantRouter = () => {
    const { library, account } = useWebWallet();
    const notification = useNotification();
    const contractMethod: any = useInstantRouterContract();
    const secondsToWait = 1200
    const queryClient = useQueryClient();


    //write-contract








    const deposit = async (amount: string) => {

        const wrappedBitcoinAmount = toTokenValue(amount);
        const wrappedBitcoinAddress = process.env.REACT_APP_WRAPPED_BITCOIN_ADDRESS || ""
        try {
            await approve(wrappedBitcoinAddress, contractMethod.address, wrappedBitcoinAmount)
            contractMethod
                ?.addLiquidity(account, wrappedBitcoinAmount)
                .then((transaction: ContractTransaction) => {

                    transaction.wait(1).then((transactionE) => {
                        notification.success("Withdraw was succesfull!");
                        queryClient.invalidateQueries(`get-predictor-pools`);
                    });
                })
                .catch((error: any) => {
                    notification.error(getErrorMessage(error));
                });
        } catch (error) {
            notification.error(getErrorMessage(error));
        }
    };
    const withdraw = async (user: string, _amount: string) => {
        try {
            const amount = toTokenValue(_amount)

            const wrappedBitcoinAddress = process.env.REACT_APP_WRAPPED_BITCOIN_ADDRESS || ""
            await approve(wrappedBitcoinAddress, contractMethod.address, amount)

            contractMethod
                ?.removeLiquidity(
                    user,
                    amount)
                .then((transaction: ContractTransaction) => {

                    transaction.wait(1).then((transactionE) => {
                        notification.success("Withdraw was succesfull!");
                        queryClient.invalidateQueries(`get-predictor-pools`);
                    });
                })
                .catch((error: any) => {
                    notification.error(getErrorMessage(error));
                });
        } catch (error) {
            notification.error(getErrorMessage(error));
        }
    };

    const lockHGT = async (_amount: string) => {

        const amount = toTokenValue(_amount);

        try {
            const HGTAddress = process.env.REACT_APP_HOTGATE_TOKEN_ADDRESS;

            await approve(HGTAddress || "0x00", contractMethod.address, amount)
            debugger
            contractMethod
                ?.lockHGT(amount)
                .then((transaction: ContractTransaction) => {

                    transaction.wait(1).then((transactionE) => {
                        notification.success("lockHGT was succesfull!");
                        // queryClient.invalidateQueries(`get-predictor-pools`);
                    });
                })
                .catch((error: any) => {
                    notification.error(getErrorMessage(error));
                });
        } catch (error) {
            notification.error(getErrorMessage(error));
        }
    };
    const unlockHGT = async (_amount: string) => {

        const amount = toTokenValue(_amount);

        try {
            // await approve(wrappedBitcoinAddress, contractMethod.address, wrappedBitcoinAmount)
            contractMethod
                ?.unlockHGT(amount)
                .then((transaction: ContractTransaction) => {

                    transaction.wait(1).then((transactionE) => {
                        notification.success("unlockHGT was succesfull!");
                        // queryClient.invalidateQueries(`get-predictor-pools`);
                    });
                })
                .catch((error: any) => {
                    notification.error(getErrorMessage(error));
                });
        } catch (error) {
            notification.error(getErrorMessage(error));
        }
    };

    //Perform swap

    const swapExactTokensForTokens = async (tokenA: string,
        tokenB: string, amountA: string,
        amountOut: string) => {
        return new Promise((resolve: (response: any) => void, reject) => {

            let amountIn = toTokenValue(amountA);
            let amountOutMin = toTokenValue(amountOut); // Minimum Received Amount
            let path = [tokenA, tokenB];
            let to = account;
            let deadline = 1000000000;


            debugger
            contractMethod
                ?.swapExactTokensForTokens(amountIn, amountOutMin, path, to, deadline)
                .then((transaction: ContractTransaction) => {
                    debugger;
                    transaction.wait(1).then((transactionE) => {
                        debugger;
                        notification.success("Exchange was succesfull!");
                        resolve(transaction);
                    });
                })
                .catch((error: any) => {
                    debugger
                    notification.error(getErrorMessage(error));
                    reject(error);
                });
        });
    };

    //read contract


    const getHotGateToken = () => {
        return contractMethod
            .HotGateToken()
            .then((data: any) => {
                debugger;
                return data

            })
            .catch((error: any) => {

                notification.error(getErrorMessage(error));
            });
    };
    const getTotalLockedHGT = () => {
        return contractMethod
            .totalLockedHGT()
            .then((data: any) => {
                debugger;
                return parseTokenValue(data)

            })
            .catch((error: any) => {

                notification.error(getErrorMessage(error));
            });
    };
    const getLockedHGT = (account: string) => {
        return contractMethod
            .lockedHGT(account)
            .then((data: any) => {
                debugger;
                return parseTokenValue(data)

            })
            .catch((error: any) => {

                notification.error(getErrorMessage(error));
            });
    };
    const getCollateralRatio = () => {
        return contractMethod
            .collateralRatio()
            .then((data: any) => {
                debugger;
                return parseTokenValue(data)

            })
            .catch((error: any) => {

                notification.error(getErrorMessage(error));
            });
    };

    // Get the expected received amount
    const getAmountOut = (amountIn: string, reserveIn: string, reserveOut: string) => {
        return contractMethod
            .getAmountOut(toTokenValue(amountIn), toTokenValue(reserveIn), toTokenValue(reserveOut))
            .then((data: any) => {
                debugger;
                return parseTokenValue(data)

            })
            .catch((error: any) => {
                debugger;
                notification.error(getErrorMessage(error));
            });
    };

    const approve = async (tokenContractAddress: string, cntractAddress: string, amount: BigNumberish) => {

        const signer: any = library?.getSigner();
        if (signer && account) {

            let deployedERC20 = WrappedERC20Token__factory.connect(tokenContractAddress, signer);

            let currentAllowance: any = await deployedERC20.allowance(account, cntractAddress)

            if (parseTokenValue(amount) > parseTokenValue(currentAllowance)) {
                let neededAllowance = amount;

                try {
                    const approvTx: ContractTransaction = await deployedERC20.approve(cntractAddress, neededAllowance);
                    await approvTx.wait(1);
                } catch (error) {
                    notification.error(getErrorMessage(error));
                }

            }
        }


    }


    const getBitcoinInstantPool = async () => {
        const instantPoolAddress = await contractMethod.bitcoinInstantPool()

        const signer = library?.getSigner();
        let instantPool = null;
        if (signer && account) {
            const deployedInstantPool = InstantPool__factory.connect(instantPoolAddress, signer);

            const poolBalance = await deployedInstantPool.balanceOf(account);
            const poolTotalSupply = await deployedInstantPool.totalSupply();
            const balance = parseTokenValue(poolBalance)
            const totalSupply = parseTokenValue(poolTotalSupply)



            const tokenAmount = await deployedInstantPool.totalWrappedBitcoin()

            const tokenAddress = instantPoolAddress;


            const tokenName = await deployedInstantPool.name();


            const tokenSymbol = await deployedInstantPool.symbol();


            const tokenBalance = await deployedInstantPool.balanceOf(account);


            const tokenPrice = 1;


            const tvl = parseTokenValue(tokenAmount) * tokenPrice;

            instantPool = { title: `${tokenSymbol}`, address: instantPoolAddress, balance, totalSupply, tvl: tvl, volume: 0, inputToken: { name: tokenName, address: tokenAddress, symbol: tokenSymbol, amount: parseTokenValue(tokenAmount), price: tokenPrice, balance: parseTokenValue(tokenBalance) } }


            return instantPool;
        }

    }

    const approveForLiquidityPool = async (liquidityPoolAdresses: string, cntractAddress: string, amount: BigNumberish) => {
        const signer: any = library?.getSigner();
        if (signer && account) {

            let deployedLiquidityPool = LiquidityPool__factory.connect(liquidityPoolAdresses, signer);

            let currentAllowance: any = await deployedLiquidityPool.allowance(account, cntractAddress);

            debugger
            if (parseTokenValue(amount) > parseTokenValue(currentAllowance)) {
                let neededAllowance = amount;

                try {
                    const approvTx: ContractTransaction = await deployedLiquidityPool.approve(cntractAddress, neededAllowance);
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
        getAmountOut,
        getBitcoinInstantPool,
        getHotGateToken,
        getTotalLockedHGT,
        getLockedHGT,
        getCollateralRatio,

        swapExactTokensForTokens,
        deposit,
        withdraw,
        lockHGT,
        unlockHGT,

        contract: contractMethod || undefined,
    };
};
