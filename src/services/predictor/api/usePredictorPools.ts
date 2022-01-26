import { useLiquidityPoolFactory } from "./../contract/useLiquidityPoolFactoryContract";
import { useFastRouter } from "./../contract/useFastRouter";
import { useInstantRouter } from "./../contract/useInstantRouter";
import useWebWallet from "hooks/use-web-wallet/useWebWallet";
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useInfiniteQuery } from "react-query";



import { useRequest } from "hooks";
import { PredictionPoolData } from "models/predictionPool";
import { intervalDataUpdate } from "utils/configs";


// Field|Value|Operator;AND/OR; ..... ; ....

// 'BETWEEN'
// 'LIKE'
// '='
// '>'
// '<'

const usePredictorPools = (perPage = 10, filter: any = undefined, orderBy = "launch_date") => {
    const offchainRequest = useRequest("predictor");
    const { account } = useWebWallet();

    const liquidityPoolFactory = useLiquidityPoolFactory();
    const fastRouter = useFastRouter();
    const instantRouter = useInstantRouter();

    // const filterItems: DropDownMenuItem[] = [
    //     {
    //         label: "Liquidity",
    //         value: "liquidity",
    //     },
    //     {
    //         label: "Fast",
    //         value: "fast",
    //     },
    //     {
    //         label: "Instant",
    //         value: "instant",
    //     },
    // ];

    // const tempFilter = filterItems?.find((item) => item.label === filter.value)?.value || "";
    return useInfiniteQuery(
        [`get-predictor-pools`, perPage, orderBy, filter],
        async ({ pageParam = 0 }) => {

            let pools: any[] = []
            if (filter.value === "liquidity") {
                pools = await liquidityPoolFactory.getAllLiquidityPools();
            }
            else if (filter.value === "fast") {
                const pool = await fastRouter.getBitcoinFastPool();

                pools = [pool]
            }
            else if (filter.value === "instant") {
                const pool = await instantRouter.getBitcoinInstantPool();

                pools = [pool]
            }






            const result: PredictionPoolData = {
                pools: pools,
                // pools: [
                //     {
                //         title: "Bitcoin-Ether",
                //         inputToken: { symbol: "BTC", amount: 100 },
                //         outputToken: { symbol: "BNB", amount: 10 },
                //         tvl: "103.30",
                //         volume: "103.30",
                //     },
                //     {
                //         title: "Bitcoin-Ether",
                //         inputToken: { symbol: "BTC", amount: 100 },
                //         outputToken: { symbol: "BNB", amount: 10 },
                //         tvl: "103.30",
                //         volume: "103.30",
                //     },
                //     {
                //         title: "Bitcoin-Ether",
                //         inputToken: { symbol: "BTC", amount: 100 },
                //         outputToken: { symbol: "BNB", amount: 10 },
                //         tvl: "103.30",
                //         volume: "103.30",
                //     },
                //     {
                //         title: "Bitcoin-Ether",
                //         inputToken: { symbol: "BTC", amount: 100 },
                //         outputToken: { symbol: "BNB", amount: 10 },
                //         tvl: "103.30",
                //         volume: "103.30",
                //     },
                //     {
                //         title: "Bitcoin-Ether",
                //         inputToken: { symbol: "BTC", amount: 100 },
                //         outputToken: { symbol: "BNB", amount: 10 },
                //         tvl: "103.30",
                //         volume: "103.30",
                //     },
                //     {
                //         title: "Bitcoin-Ether",
                //         inputToken: { symbol: "BTC", amount: 100 },
                //         outputToken: { symbol: "BNB", amount: 10 },
                //         tvl: "103.30",
                //         volume: "103.30",
                //     },
                // ],
                total: pools?.length,
                page: pageParam,
            };

            return result;
        },
        {
            refetchInterval: intervalDataUpdate,
            refetchOnWindowFocus: false,
            enabled: !!account && !!liquidityPoolFactory?.contract,
            getNextPageParam: (lastData: any) =>
                (lastData?.page || 0) + 1 < Math.ceil(lastData?.total / perPage) ? (lastData.page || 0) + 1 : undefined,
        },
    );
};

export default usePredictorPools;
