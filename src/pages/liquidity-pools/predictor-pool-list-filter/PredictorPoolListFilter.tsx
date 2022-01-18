import { Tabs, Tab, Input, Button, ButtonWidth } from "ui-components";
import { DropDownMenuItem } from "components/drop-down-menu";
import { useGlobalDispatch, useGlobalState } from "states/globalContext";
import { ReactComponent as SearchLogo } from "assets/icons/svgs/search.svg";
import { useLiquidityPoolFactory } from "services/predictor/contract/useLiquidityPoolFactoryContract";
import "./PredictionPoolListFilter.scss";

const PredictionPoolListFilter = () => {
    const GlobalDispatch = useGlobalDispatch();
    const { poolsFilters, poolInputSearch } = useGlobalState();

    const liquidityPoolFactory = useLiquidityPoolFactory();

    const handleChange = (event: any) => {
        const { value } = event.target;

        GlobalDispatch({
            type: "setPoolFilters",
            value: value,
        });
    };

    const handleCreatePool = () => {
        // const tokenA = process.env.REACT_APP_ERC20_POLKADOT_TARGET_ADDRESS || "";
        const tokenA = process.env.REACT_APP_ERC20_CHAINLINK_TARGET_ADDRESS || "";
        const tokenB = process.env.REACT_APP_HOTGATE_TOKEN_ADDRESS || "";

        liquidityPoolFactory.createLiquidityPool(tokenA, tokenB);
    };

    const filterItems: DropDownMenuItem[] = [
        {
            label: "Liquidity",
            value: "liquidity",
        },
        {
            label: "Fast",
            value: "fast",
        },
        {
            label: "Instant",
            value: "instant",
        },
    ];

    return (
        <div className="predictor-pool-list-filter">
            <div className="predictor-pool-list-filter-header">
                <div className="predictor-pool-list-filter-header-title">My Pools</div>
                <div className="predictor-pool-list-filter-header-pool">
                    <Input
                        className="mx-10 h-45"
                        placeHolder="Search"
                        suffix={<SearchLogo width={17} height={17} />}
                        value={poolInputSearch}
                        name="search"
                        onChange={handleChange}
                        autoComplete="off"
                        style={{ padding: "5px 10px" }}
                    />
                    <Button onClick={handleCreatePool} width={ButtonWidth.FIT_PARENT}>
                        Create New Pool
                    </Button>
                </div>
            </div>

            <div className="predictor-pool-list-filter-filter">
                <div className="row">
                    <Tabs
                        hasBorder={true}
                        value={poolsFilters?.value}
                        onChange={(value: any) => {
                            const findItem = filterItems.find((item) => item.value === value);
                            GlobalDispatch({
                                type: "setPoolFilters",
                                value: findItem,
                            });
                        }}
                    >
                        {filterItems.map((filter: any, index) => (
                            <Tab key={index} value={filter?.value}>{filter.label}</Tab>
                        ))}
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default PredictionPoolListFilter;
