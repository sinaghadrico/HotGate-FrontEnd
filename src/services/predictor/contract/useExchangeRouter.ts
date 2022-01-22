import { BigNumber } from '@ethersproject/bignumber';
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { BigNumberish, ContractTransaction } from "ethers";
import useWebWallet, { getErrorMessage } from "hooks/use-web-wallet/useWebWallet";
import { parseTokenValue, toTokenValue } from "utils/convert";
import useNotification from "hooks/useNotification";
import { WrappedERC20Token__factory } from "contracts/types";
import { useExchangeRouterContract } from "services/contracts";

export const useExchangeRouter = () => {
    const { library, account } = useWebWallet();
    const notification = useNotification();
    const contractMethod: any = useExchangeRouterContract();
    const secondsToWait = 1200


    //write-contract








    const deposit = async (tokenA: string,
        tokenB: string, amountA: string,
        amountB: string) => {

        let amountIn = toTokenValue(amountA);
        let amountOut = toTokenValue(amountB); // Minimum Received Amount

        debugger
        await approve(tokenA, contractMethod.address, amountIn)
        await approve(tokenB, contractMethod.address, amountOut)



        let amountAmin = 0; // TODO: find correct amount
        let amountBmin = 0; // TODO: find correct amount

        let lastBlock: any = await library?.getBlock('latest');
        let lastTimestamp = lastBlock.timestamp;
        let deadline = lastTimestamp + secondsToWait;


        debugger
        contractMethod
            ?.addLiquidity(tokenA, tokenB,
                amountIn,
                amountOut,
                amountAmin,
                amountBmin,
                account,
                deadline)
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
        amountOut: string, deadline: any) => {


        let amountIn = toTokenValue(amountA);
        let amountOutMin = toTokenValue(amountOut); // Minimum Received Amount
        let path = [tokenA, tokenB];
        let to = account;



        await approve(tokenA, contractMethod.address, amountIn)


        let lastBlock: any = await library?.getBlock('latest');
        let lastTimestamp = lastBlock.timestamp;
        let calcDeadline = lastTimestamp + deadline;


        contractMethod
            ?.swapExactTokensForTokens(amountIn, amountOutMin, path, to, calcDeadline)
        // .then((transaction: ContractTransaction) => {
        //     debugger;
        //     transaction.wait(1).then((transactionE) => {
        //         debugger;
        //         notification.success("Exchange was succesfull!");
        //         resolve(transaction);
        //     });
        // })
        // .catch((error: any) => {
        //     debugger
        //     notification.error(getErrorMessage(error));
        //     reject(error);
        // });
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


    //how to use
    // const { data: startDate, loading } = useQuery("StartDate", () => getStartDate());

    return {
        getAmountOut,


        swapExactTokensForTokens,
        deposit,

        contract: contractMethod || undefined,
    };
};
