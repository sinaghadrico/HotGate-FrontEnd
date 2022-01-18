import { useLiquidityPoolFactory } from "./../contract/useLiquidityPoolFactoryContract";
import useWebWallet from "hooks/use-web-wallet/useWebWallet";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PredictionPool } from "models";
import { useInfiniteQuery } from "react-query";

import { parsePredictorOffChainPool, parsePredictorPool } from "utils/pool";

import { useRequest } from "hooks";
import { PredictionPoolData } from "models/predictionPool";
import { intervalDataUpdate } from "utils/configs";
import { DropDownMenuItem } from "components/drop-down-menu";

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
            const dataPool = await liquidityPoolFactory.getAllLiquidityPools();

            const result: PredictionPoolData = {
                pools: [
                    {
                        title: "Bitcoin-Ether",
                        inputToken: { title: "BTC", value: 100 },
                        outputToken: { title: "BNB", value: 10 },
                        tvl: "103.30",
                        volume: "103.30",
                    },
                    {
                        title: "Bitcoin-Ether",
                        inputToken: { title: "BTC", value: 100 },
                        outputToken: { title: "BNB", value: 10 },
                        tvl: "103.30",
                        volume: "103.30",
                    },
                    {
                        title: "Bitcoin-Ether",
                        inputToken: { title: "BTC", value: 100 },
                        outputToken: { title: "BNB", value: 10 },
                        tvl: "103.30",
                        volume: "103.30",
                    },
                    {
                        title: "Bitcoin-Ether",
                        inputToken: { title: "BTC", value: 100 },
                        outputToken: { title: "BNB", value: 10 },
                        tvl: "103.30",
                        volume: "103.30",
                    },
                    {
                        title: "Bitcoin-Ether",
                        inputToken: { title: "BTC", value: 100 },
                        outputToken: { title: "BNB", value: 10 },
                        tvl: "103.30",
                        volume: "103.30",
                    },
                    {
                        title: "Bitcoin-Ether",
                        inputToken: { title: "BTC", value: 100 },
                        outputToken: { title: "BNB", value: 10 },
                        tvl: "103.30",
                        volume: "103.30",
                    },
                ],
                total: 6,
                page: pageParam,
            };

            return result;
        },
        {
            refetchInterval: intervalDataUpdate,
            // refetchOnWindowFocus: false,
            enabled: !!account && !!liquidityPoolFactory?.contract,
            getNextPageParam: (lastData: any) =>
                (lastData?.page || 0) + 1 < Math.ceil(lastData?.total / perPage) ? (lastData.page || 0) + 1 : undefined,
        },
    );
};

export default usePredictorPools;
