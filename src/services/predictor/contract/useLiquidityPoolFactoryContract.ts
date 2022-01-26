/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { ContractTransaction } from "ethers";
import useWebWallet, { getErrorMessage } from "hooks/use-web-wallet/useWebWallet";
import { parseTokenValue } from "utils/convert";
import useNotification from "hooks/useNotification";

import { LiquidityPool__factory, WrappedERC20Token__factory } from "contracts/types";

import { useLiquidityPoolFactoryContract } from "services/contracts";

export const useLiquidityPoolFactory = () => {
    const { library, account } = useWebWallet();
    const notification = useNotification();
    const contractMethod: any = useLiquidityPoolFactoryContract();

    //write-contract

    const createLiquidityPool = async (tokenA: string,
        tokenB: string) => {
        return new Promise((resolve: (response: any) => void, reject) => {
            debugger
            contractMethod
                ?.createLiquidityPool(tokenA, tokenB)
                .then((transaction: ContractTransaction) => {
                    debugger;
                    transaction.wait(1).then((transactionE) => {
                        debugger;
                        notification.success("Liquidity Pool Creted.");
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

    // Get total number of liquidity pools  
    const getAllLiquidityPoolsLength = () => {
        return contractMethod
            .allLiquidityPoolsLength()
            .then((data: any) => {

                return parseTokenValue(data)

            })
            .catch((error: any) => {

                notification.error(getErrorMessage(error));
            });
    };

    // Get  liquidity pool 
    const getLiquidityPoolAddress = async (tokenA: string, tokenB: string): Promise<any> => {

        const liquidityPool = await contractMethod.getLiquidityPool(tokenA, tokenB)


        return liquidityPool
    };

    // Get  liquidity pool 
    const getLiquidityPool = async (tokenA: string, tokenB: string): Promise<any> => {

        const dataPooLAddress = await contractMethod.getLiquidityPool(tokenA, tokenB)


        const signer = library?.getSigner();

        let liquidityPool = null;

        if (signer && account) {

            const deployedLiquidityPool = LiquidityPool__factory.connect(dataPooLAddress, signer);
            const tokenAddress0 = await deployedLiquidityPool.token0();
            const tokenAddress1 = await deployedLiquidityPool.token1();

            const deployedToken0 = WrappedERC20Token__factory.connect(tokenA, signer);
            const deployedToken1 = WrappedERC20Token__factory.connect(tokenB, signer);

            const tokenName0 = await deployedToken0.name();
            const tokenName1 = await deployedToken1.name();

            const tokenSymbol0 = await deployedToken0.symbol();
            const tokenSymbol1 = await deployedToken1.symbol();

            const tokenBalance0 = await deployedToken0.balanceOf(account);
            const tokenBalance1 = await deployedToken1.balanceOf(account);

            const returnedArray = await deployedLiquidityPool.getReserves();

            const tokenAmount0 = parseTokenValue(returnedArray[0]);
            const tokenAmount1 = parseTokenValue(returnedArray[1]);



            const tokenPrice0 = 1;
            const tokenPrice1 = 1;

            const tvl = (tokenAmount0) * tokenPrice0 + (tokenAmount1) * tokenPrice1

            liquidityPool = { title: `${tokenSymbol0}-${tokenSymbol1}`, tvl: tvl, volume: 0, inputToken: { name: tokenName0, address: tokenAddress0, symbol: tokenSymbol0, amount: tokenAmount0, price: tokenPrice0, balance: parseTokenValue(tokenBalance0) }, outputToken: { name: tokenName1, address: tokenAddress1, symbol: tokenSymbol1, amount: tokenAmount1, price: tokenPrice1, balance: parseTokenValue(tokenBalance1) } };

        }
        return liquidityPool
    };

    // Get all liquidity pools 
    const getAllLiquidityPools = async (): Promise<any[]> => {

        const signer = library?.getSigner();

        let liquidityPools = [];

        if (signer && account) {


            const allLiquidityPoolsLength = await contractMethod.allLiquidityPoolsLength()


            for (let i = 0; i < allLiquidityPoolsLength; i++) {

                const dataPooLAddress = await contractMethod.allLiquidityPools(i)
                const deployedLiquidityPool = LiquidityPool__factory.connect(dataPooLAddress, signer);

                const liquidityPoolBalance = await deployedLiquidityPool.balanceOf(account);
                const liquidityPoolTotalSupply = await deployedLiquidityPool.totalSupply();
                const balance = parseTokenValue(liquidityPoolBalance)
                const totalSupply = parseTokenValue(liquidityPoolTotalSupply)


                const tokenAddress0 = await deployedLiquidityPool.token0();
                const tokenAddress1 = await deployedLiquidityPool.token1();


                const deployedToken0 = WrappedERC20Token__factory.connect(tokenAddress0, signer);
                const deployedToken1 = WrappedERC20Token__factory.connect(tokenAddress1, signer);

                const tokenName0 = await deployedToken0.name();
                const tokenName1 = await deployedToken1.name();

                const tokenSymbol0 = await deployedToken0.symbol();
                const tokenSymbol1 = await deployedToken1.symbol();

                const tokenBalance0 = await deployedToken0.balanceOf(account);
                const tokenBalance1 = await deployedToken1.balanceOf(account);

                const returnedArray = await deployedLiquidityPool.getReserves();

                const tokenAmount0 = parseTokenValue(returnedArray[0]);
                const tokenAmount1 = parseTokenValue(returnedArray[1]);



                const tokenPrice0 = 1;
                const tokenPrice1 = 1;

                const tvl = (tokenAmount0) * tokenPrice0 + (tokenAmount1) * tokenPrice1

                liquidityPools.push({ title: `${tokenSymbol0}-${tokenSymbol1}`, address: dataPooLAddress, tvl: tvl, balance, totalSupply, volume: 0, inputToken: { name: tokenName0, address: tokenAddress0, symbol: tokenSymbol0, amount: tokenAmount0, price: tokenPrice0, balance: parseTokenValue(tokenBalance0) }, outputToken: { name: tokenName1, address: tokenAddress1, symbol: tokenSymbol1, amount: tokenAmount1, price: tokenPrice1, balance: parseTokenValue(tokenBalance1) } })

            }


        }
        return liquidityPools
    };

    // Get all tokens  
    const getAllTokens = async (): Promise<any[]> => {



        let tokens: any = [];

        let liquidityPools = await getAllLiquidityPools()
        liquidityPools.forEach((token) => {


            const inputToken = token.inputToken;
            const outputToken = token.outputToken;



            const findInputTokenIndex = tokens?.findIndex((i: any) => i.name === inputToken.name)


            if (findInputTokenIndex < 0) {
                tokens.push({ ...inputToken, tvl: token.tvl, connectionTokens: [outputToken] })
            }
            else {
                tokens[findInputTokenIndex] = { ...tokens[findInputTokenIndex], tvl: (tokens[findInputTokenIndex].amount + inputToken.amount) * inputToken.price, connectionTokens: [...tokens[findInputTokenIndex].connectionTokens, outputToken] }
            }

            const findOutputTokenIndex = tokens?.findIndex((i: any) => i.name === outputToken.name)

            if (findOutputTokenIndex < 0) {
                tokens.push({ ...outputToken, tvl: token.tvl, connectionTokens: [inputToken] })
            }
            else {

                tokens[findOutputTokenIndex] = { ...tokens[findOutputTokenIndex], tvl: (tokens[findOutputTokenIndex].amount + outputToken.amount) * outputToken.price, connectionTokens: [...tokens[findOutputTokenIndex].connectionTokens, inputToken] }
            }


        })


        return tokens;
    };

    //how to use
    // const { data: startDate, loading } = useQuery("StartDate", () => getStartDate());

    return {
        getAllLiquidityPoolsLength,
        getAllLiquidityPools,
        getLiquidityPool,
        getLiquidityPoolAddress,
        getAllTokens,



        createLiquidityPool,

        contract: contractMethod || undefined,
    };
};
