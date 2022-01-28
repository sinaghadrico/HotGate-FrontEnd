import {
    WrappedToken,
    WrappedToken__factory,
    BitcoinRelay,
    BitcoinRelay__factory,
    WETH,
    WETH__factory,
    ERC20,
    ERC20__factory,
    ExchangeRouter,
    ExchangeRouter__factory,
    InstantRouter,
    InstantRouter__factory,
    WrappedERC20Token__factory,
    WrappedERC20Token,
    CCExchangeRouter,
    CCExchangeRouter__factory,
    CCTransferRouter,
    CCTransferRouter__factory,
    LiquidityPoolFactory,
    LiquidityPoolFactory__factory,
    LiquidityPool,
    LiquidityPool__factory,
    FastRouter,
    FastRouter__factory,
} from "contracts/types";
import { useContract, useContractFromAddress } from "./contract";

export const useUsdContract = (): WrappedERC20Token | undefined => {
    return useContract(WrappedERC20Token__factory.connect, "USDCToken");
};

export const useLiquidityPoolContract = (): LiquidityPool | undefined => {
    const address: any = process.env.REACT_APP_LIQUIDITY_POOL_FACTORY_ADDRESS;
    return useContractFromAddress(LiquidityPool__factory.connect, address);
};

export const useLiquidityPoolFactoryContract = (): LiquidityPoolFactory | undefined => {
    const address: any = process.env.REACT_APP_LIQUIDITY_POOL_FACTORY_ADDRESS;
    return useContractFromAddress(LiquidityPoolFactory__factory.connect, address);
};

export const useFastRouterContract = (): FastRouter | undefined => {
    const address: any = process.env.REACT_APP_FAST_ROUTER_ADDRESS;
    return useContractFromAddress(FastRouter__factory.connect, address);
};
export const useExchangeRouterContract = (): ExchangeRouter | undefined => {
    const address: any = process.env.REACT_APP_NDEX_ROUTER_ADDRESS;
    return useContractFromAddress(ExchangeRouter__factory.connect, address);
};
export const useInstantRouterContract = (): InstantRouter | undefined => {
    const address: any = process.env.REACT_APP_INSTANT_ROUTER_ADDRESS;
    return useContractFromAddress(InstantRouter__factory.connect, address);
};

export const useCCExchangeRouterContract = (): CCExchangeRouter | undefined => {
    const address: any = process.env.REACT_APP_CC_EXCHANGE_ROUTER_ADDRESS;
    return useContractFromAddress(CCExchangeRouter__factory.connect, address);
};

export const useCCTransferRouterContract = (): CCTransferRouter | undefined => {
    const address: any = process.env.REACT_APP_CC_TRANSFER_ROUTER_ADDRESS;
    return useContractFromAddress(CCTransferRouter__factory.connect, address);
};

export const useHOTGATEContract = (): ERC20 | undefined => {
    const address: any = process.env.REACT_APP_HOTGATE_TOKEN_ADDRESS;
    return useContractFromAddress(ERC20__factory.connect, address);
};
export const usePOLKADOTContract = (): ERC20 | undefined => {
    const address: any = process.env.REACT_APP_ERC20_POLKADOT_TARGET_ADDRESS;
    return useContractFromAddress(ERC20__factory.connect, address);
};
export const useCHAINLINKContract = (): ERC20 | undefined => {
    const address: any = process.env.REACT_APP_ERC20_CHAINLINK_TARGET_ADDRESS;
    return useContractFromAddress(ERC20__factory.connect, address);
};
export const useWETHContract = (): WETH | undefined => {
    const address: any = process.env.REACT_APP_WETH_ADDRESS;
    return useContractFromAddress(WETH__factory.connect, address);
};
export const useWrappedBITCOINContract = (): WrappedToken | undefined => {
    const address: any = process.env.REACT_APP_WRAPPED_BITCOIN_ADDRESS;
    return useContractFromAddress(WrappedToken__factory.connect, address);
};
export const useBitcoinRelayContract = (): BitcoinRelay | undefined => {
    const address: any = process.env.REACT_APP_BTC_RELAY_ADDRESS;
    return useContractFromAddress(BitcoinRelay__factory.connect, address);
};
