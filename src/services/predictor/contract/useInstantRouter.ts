import { BigNumber } from '@ethersproject/bignumber';
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { BigNumberish, ContractTransaction } from "ethers";
import useWebWallet, { getErrorMessage } from "hooks/use-web-wallet/useWebWallet";
import { parseTokenValue, toTokenValue } from "utils/convert";
import useNotification from "hooks/useNotification";
import { WrappedERC20Token__factory, InstantPool__factory } from "contracts/types";
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
        let fastPool = null;
        if (signer && account) {
            const deployedFastPool = InstantPool__factory.connect(instantPoolAddress, signer);


            const tokenAmount = await deployedFastPool.totalWrappedBitcoin()

            const tokenAddress = instantPoolAddress;


            const tokenName = await deployedFastPool.name();


            const tokenSymbol = await deployedFastPool.symbol();


            const tokenBalance = await deployedFastPool.balanceOf(account);


            const tokenPrice = 1;


            const tvl = parseTokenValue(tokenAmount) * tokenPrice;

            fastPool = { title: `${tokenSymbol}`, tvl: tvl, volume: 0, inputToken: { name: tokenName, address: tokenAddress, symbol: tokenSymbol, amount: parseTokenValue(tokenAmount), price: tokenPrice, balance: parseTokenValue(tokenBalance) } }


            return fastPool;
        }

    }


    //how to use
    // const { data: startDate, loading } = useQuery("StartDate", () => getStartDate());

    return {
        getAmountOut,
        getBitcoinInstantPool,

        swapExactTokensForTokens,
        deposit,
        withdraw,

        contract: contractMethod || undefined,
    };
};
