import { BigNumber } from '@ethersproject/bignumber';
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { BigNumberish, ContractTransaction } from "ethers";
import useWebWallet, { getErrorMessage } from "hooks/use-web-wallet/useWebWallet";
import { parseTokenValue, toTokenValue } from "utils/convert";
import useNotification from "hooks/useNotification";
import { WrappedERC20Token__factory, InstantPool__factory } from "contracts/types";
import { useInstantRouterContract } from "services/contracts";

export const useInstantRouter = () => {
    const { library, account } = useWebWallet();
    const notification = useNotification();
    const contractMethod: any = useInstantRouterContract();
    const secondsToWait = 1200


    //write-contract








    const deposit = async (amount: string) => {

        const wrappedBitcoinAmount = toTokenValue(amount);
        const wrappedBitcoinAddress = process.env.REACT_APP_WRAPPED_BITCOIN_ADDRESS || ""
        debugger
        await approve(wrappedBitcoinAddress, contractMethod.address, wrappedBitcoinAmount)



        debugger
        contractMethod
            ?.addLiquidity(account, wrappedBitcoinAmount)
        // .then((transaction: ContractTransaction) => {
        //     debugger;
        //     transaction.wait(1).then((transactionE) => {
        //         debugger;
        //         notification.success("Deposit was succesfull!");
        //         resolve(transaction);
        //     });
        // })
        // .catch((error: any) => {
        //     debugger
        //     notification.error(getErrorMessage(error));
        //     reject(error);
        // });
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
                await deployedERC20.approve(cntractAddress, neededAllowance)
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

        contract: contractMethod || undefined,
    };
};
