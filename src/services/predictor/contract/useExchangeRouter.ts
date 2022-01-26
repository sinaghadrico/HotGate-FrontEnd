import { LiquidityPool } from './../../../contracts/types/LiquidityPool.d';
import { Withdraw } from 'components/withdraw';
import { BigNumber } from '@ethersproject/bignumber';
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { BigNumberish, ContractTransaction } from "ethers";
import useWebWallet, { getErrorMessage } from "hooks/use-web-wallet/useWebWallet";
import { parseTokenValue, toTokenValue } from "utils/convert";
import useNotification from "hooks/useNotification";
import { WrappedERC20Token__factory, LiquidityPool__factory } from "contracts/types";
import { useExchangeRouterContract } from "services/contracts";


import { useQueryClient } from 'react-query';

export const useExchangeRouter = () => {
    const { library, account } = useWebWallet();
    const notification = useNotification();
    const queryClient = useQueryClient();
    const contractMethod: any = useExchangeRouterContract();
    const secondsToWait = 1200


    //write-contract








    const deposit = async (tokenA: string,
        tokenB: string, amountA: string,
        amountB: string) => {

        let amountIn = toTokenValue(amountA);
        let amountOut = toTokenValue(amountB); // Minimum Received Amount


        try {
            await approve(tokenA, contractMethod.address, amountIn)
            await approve(tokenB, contractMethod.address, amountOut)

            let amountAmin = toTokenValue((Number(amountA) * 0.95).toString());
            let amountBmin = toTokenValue((Number(amountB) * 0.95).toString());

            let lastBlock: any = await library?.getBlock('latest');
            let lastTimestamp = lastBlock.timestamp;
            let deadline = lastTimestamp + secondsToWait;



            contractMethod
                ?.addLiquidity(tokenA, tokenB,
                    amountIn,
                    amountOut,
                    amountAmin,
                    amountBmin,
                    account,
                    deadline)
                .then((transaction: ContractTransaction) => {

                    transaction.wait(1).then((transactionE) => {
                        notification.success("Deposit was succesfull!");
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
    const withdraw = async (tokenA: string,
        tokenB: string, _amountAmin: string,
        _amountBmin: string, liquidityAmount: string, liquidityPoolAdresses: string) => {




        try {



            const liquidity = toTokenValue(liquidityAmount)

            await approveForLiquidityPool(liquidityPoolAdresses, contractMethod.address, liquidityAmount)


            let amountAmin = toTokenValue(_amountAmin);
            let amountBmin = toTokenValue(_amountBmin);


            let lastBlock: any = await library?.getBlock('latest');
            let lastTimestamp = lastBlock.timestamp;
            let deadline = lastTimestamp + secondsToWait;

            debugger

            contractMethod
                ?.removeLiquidity(tokenA, tokenB,
                    liquidity,
                    amountAmin,
                    amountBmin,
                    account,
                    deadline)
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




    //Perform swap

    const swapExactTokensForTokens = async (tokenA: string,
        tokenB: string, amountA: string,
        amountOut: string, deadline: any) => {


        let amountIn = toTokenValue(amountA);
        let amountOutMin = toTokenValue(amountOut); // Minimum Received Amount
        let path = [tokenA, tokenB];
        let to = account;

        try {

            await approve(tokenA, contractMethod.address, amountIn)


            let lastBlock: any = await library?.getBlock('latest');
            let lastTimestamp = lastBlock.timestamp;
            let calcDeadline = lastTimestamp + deadline;


            contractMethod
                ?.swapExactTokensForTokens(amountIn, amountOutMin, path, to, calcDeadline)
                .then((transaction: ContractTransaction) => {
                    transaction.wait(1).then((transactionE) => {
                        notification.success("Exchange was succesfull!");
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

    // Get the expected received amount
    const getAmountOut = (amountIn: string, reserveIn: string, reserveOut: string) => {
        return contractMethod
            .getAmountOut(toTokenValue(amountIn), toTokenValue(reserveIn), toTokenValue(reserveOut))
            .then((data: any) => {
                return parseTokenValue(data)

            })
            .catch((error: any) => {
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

    const approveForLiquidityPool = async (liquidityPoolAdresses: string, cntractAddress: string, amount: BigNumberish) => {
        const signer: any = library?.getSigner();
        if (signer && account) {

            let deployedLiquidityPool = LiquidityPool__factory.connect(liquidityPoolAdresses, signer);

            let currentAllowance: any = await deployedLiquidityPool.allowance(account, cntractAddress);


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

    const getWrappedBitcoinAddress = async () => {
        const fastPoolAddress = await contractMethod.wrappedBitcoin();

        if (fastPoolAddress === "0x0000000000000000000000000000000000000000") {
            return process.env.REACT_APP_WRAPPED_BITCOIN_ADDRESS || ""
        }
        return fastPoolAddress;
    }


    //how to use
    // const { data: startDate, loading } = useQuery("StartDate", () => getStartDate());

    return {
        getAmountOut,

        getWrappedBitcoinAddress,
        swapExactTokensForTokens,
        deposit,
        withdraw,

        contract: contractMethod || undefined,
    };
};
