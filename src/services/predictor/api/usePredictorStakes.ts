/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "react-query";
import { StakeData } from "models/stake";
import useWebWallet from "hooks/use-web-wallet/useWebWallet";
import { useLiquidityPoolFactory } from "./../contract/useLiquidityPoolFactoryContract";
import { intervalDataUpdate } from "utils/configs";

const usePredictorStakes = (pageNumber: number, perPage = 10) => {
    const { account } = useWebWallet();
    const liquidityPoolFactory = useLiquidityPoolFactory();
    return useQuery<StakeData>(
        [`get-predictor-stakes`, pageNumber, perPage],
        async () => {

            const tokens: any[] = await liquidityPoolFactory.getAllTokens();

            const result: StakeData = {
                stakes: tokens,
                // stakes: [
                //     {
                //         id: "1",
                //         token: "BTC",
                //         price: "$40,000",
                //         change: "1.5%",
                //         tvl: "0$103.30 M",
                //         volume: "$103.30 M",
                //     },
                //     {
                //         id: "2",
                //         token: "BTC",
                //         price: "$40,000",
                //         change: "1.5%",
                //         tvl: "0$103.30 M",
                //         volume: "$103.30 M",
                //     },
                //     {
                //         id: "3",
                //         token: "BTC",
                //         price: "$40,000",
                //         change: "1.5%",
                //         tvl: "0$103.30 M",
                //         volume: "$103.30 M",
                //     },
                //     {
                //         id: "4",
                //         token: "BTC",
                //         price: "$40,000",
                //         change: "1.5%",
                //         tvl: "0$103.30 M",
                //         volume: "$103.30 M",
                //     },
                //     {
                //         id: "5",
                //         token: "BTC",
                //         price: "$40,000",
                //         change: "1.5%",
                //         tvl: "0$103.30 M",
                //         volume: "$103.30 M",
                //     },
                //     {
                //         id: "6",
                //         token: "BTC",
                //         price: "$40,000",
                //         change: "1.5%",
                //         tvl: "0$103.30 M",
                //         volume: "$103.30 M",
                //     },
                // ],
                total: tokens?.length,
            };
            return result;
        },
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
            enabled: !!account && !!liquidityPoolFactory?.contract,
            refetchInterval: intervalDataUpdate,
        },
    );
};

export default usePredictorStakes;
