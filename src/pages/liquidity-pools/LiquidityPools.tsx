/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import { Button, ButtonForm, ButtonWidth } from "ui-components";
import { useGlobalState, useGlobalDispatch } from "states/globalContext";
import { PredictorPoolListFilter } from "./predictor-pool-list-filter";
import usePredictorPools from "services/predictor/api/usePredictorPools";
import { Helmet } from "react-helmet-async";
import "./LiquidityPools.scss";
import { PoolBox } from "components/pool-box";

const LiquidityPools: FC = () => {
    const { poolsOrderBy, poolsFilters } = useGlobalState();
    const GlobalDispatch = useGlobalDispatch();

    useEffect(() => {
        GlobalDispatch({
            type: "setPoolFilters",
            value: { label: "Liquidity", value: "liquidity" },
        });
    }, []);

    const pageSize = 6;

    const { data, isLoading, isFetching, fetchNextPage, hasNextPage } = usePredictorPools(
        pageSize,
        poolsFilters,
        poolsOrderBy,
    );
    return (
        <div className="liquidity-pools row">
            <Helmet>
                <title> Pools </title>
                <meta name="description" content="Pools" />
            </Helmet>
            <div className="row">
                <PredictorPoolListFilter />
            </div>
            <div className="row">
                {data?.pages?.map((page) => {
                    return page?.pools?.map((pool: any, index) => {
                        return (
                            <div className="col-md-4 col-lg-4 col-xl-4 my-10" key={index}>
                                <PoolBox
                                    data={pool}
                                />
                            </div>
                        );
                    });
                })}

                {isLoading && (
                    <>
                        {[0, 1, 2, 3, 4, 5]?.map((item) => (
                            <div className="col-md-4 col-lg-4 col-xl-4 mb-15" key={item + "-PredictPoolBoxLoader"}>
                                <PoolBox
                                    data={{
                                        title: "_-_",
                                        inputToken: { title: "_", value: 0 },
                                        outputToken: { title: "_", value: 0 },
                                        tvl: "0",
                                        volume: "0",
                                    }}
                                />
                            </div>
                        ))}
                    </>
                )}
            </div>
            {hasNextPage && (
                <div className="liquidity-pools-button">
                    <Button
                        buttonForm={ButtonForm.SECONDARY_HIGH}
                        width={ButtonWidth.FIT_PARENT}
                        onClick={() => {
                            fetchNextPage();
                        }}
                    >
                        {isFetching ? "Loading..." : "Load more"}
                    </Button>
                </div>
            )}
            {data?.pages[0]?.total === 0 && <div className="liquidity-pools-empty">There is no available pool</div>}
        </div>
    );
};
export default LiquidityPools;
