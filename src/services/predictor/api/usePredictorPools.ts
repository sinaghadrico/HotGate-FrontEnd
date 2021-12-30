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

    const filterItems: DropDownMenuItem[] = [
        {
            label: "Normal",
            value: 0,
        },
        {
            label: "Fast",
            value: 1,
        },
        {
            label: "Instant",
            value: 2,
        },
    ];

    // const tempFilter = filterItems?.find((item) => item.label === filter.value)?.value || "";
    return useInfiniteQuery(
        [`get-predictor-pools`, perPage, orderBy, filter],
        async ({ pageParam = 0 }) => {
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
            getNextPageParam: (lastData: any) =>
                (lastData?.page || 0) + 1 < Math.ceil(lastData?.total / perPage) ? (lastData.page || 0) + 1 : undefined,
        },
    );
};

export default usePredictorPools;
