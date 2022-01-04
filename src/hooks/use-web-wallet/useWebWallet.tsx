/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React from "react";
import { Harmony } from "@harmony-js/core";
import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import {
    NoEthereumProviderError,
    UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from "@web3-react/walletconnect-connector";
import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from "@web3-react/frame-connector";
import { Web3Provider } from "@ethersproject/providers";
import { formatEther } from "@ethersproject/units";
import { toBech32 } from "@harmony-js/crypto";
import { WebWalletProvider } from "./webWalletContext";

import { useEagerConnect, useInactiveListener } from "./hooks";

import {
    injected,
    network,
    walletconnect,
    walletlink,
    ledger,
    // trezor,
    lattice,
    // frame,
    // authereum,
    // fortmatic,
    // magic,
    // portis,
    torus,
    onewallet,
    mathwallet,
} from "./connectors";
import { BigNumber } from "@ethersproject/bignumber";

enum ConnectorNames {
    Injected = "Injected",
    Network = "Network",
    WalletConnect = "WalletConnect",
    WalletLink = "WalletLink",
    Ledger = "Ledger",
    // Trezor = "Trezor",
    Lattice = "Lattice",
    // Frame = "Frame",
    // Authereum = "Authereum",
    // Fortmatic = "Fortmatic",
    // Magic = "Magic",
    // Portis = "Portis",
    Torus = "Torus",
    OneWallet = "OneWallet",
    MathWallet = "MathWallet",
}

const connectorsByName: { [connectorName in ConnectorNames]: any } = {
    [ConnectorNames.Injected]: injected,
    [ConnectorNames.Network]: network,
    [ConnectorNames.WalletConnect]: walletconnect,
    [ConnectorNames.WalletLink]: walletlink,
    [ConnectorNames.Ledger]: ledger,
    // [ConnectorNames.Trezor]: trezor,
    [ConnectorNames.Lattice]: lattice,
    // [ConnectorNames.Frame]: frame,
    // [ConnectorNames.Authereum]: authereum,
    // [ConnectorNames.Fortmatic]: fortmatic,
    // [ConnectorNames.Magic]: magic,
    // [ConnectorNames.Portis]: portis,
    [ConnectorNames.Torus]: torus,
    [ConnectorNames.OneWallet]: onewallet,
    [ConnectorNames.MathWallet]: mathwallet,
};

function getErrorMessage(error: any) {
    if (error instanceof NoEthereumProviderError) {
        return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
    } else if (error instanceof UnsupportedChainIdError) {
        return "You're connected to an unsupported network.";
    } else if (
        error instanceof UserRejectedRequestErrorInjected ||
        error instanceof UserRejectedRequestErrorWalletConnect ||
        error instanceof UserRejectedRequestErrorFrame
    ) {
        return "Please authorize this website to access your Ethereum account.";
    } else {
        return (
            error?.data?.message ||
            error?.data?.reason ||
            error?.message ||
            "An unknown error occurred. Check the console for more details."
        );
    }
}

function getLibrary(provider: any): Web3Provider | Harmony {
    let library: Web3Provider | Harmony;
    debugger;
    if (provider?.chainType === "hmy") {
        library = provider.blockchain;
    } else {
        library = new Web3Provider(provider);
        library.pollingInterval = 12000;
    }
    return library;
}
function UseWebWalletProviderWrapper(props: any) {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <WebWalletProvider {...props} />
        </Web3ReactProvider>
    );
}

function useGetBlockNumber() {
    const { chainId, library } = useWeb3React();

    const [blockNumber, setBlockNumber] = React.useState<number | null>();

    const isHmyLibrary = library?.messenger?.chainType === "hmy";

    React.useEffect((): any => {
        if (library) {
            let stale = false;
            debugger;
            library
                .getBlockNumber()
                .then((blockNumber: number) => {
                    const _blockNumber: any = blockNumber;
                    debugger;
                    if (isHmyLibrary) {
                        debugger;
                        blockNumber = BigNumber.from(_blockNumber?.result).toNumber();
                    }
                    if (!stale) {
                        setBlockNumber(blockNumber);
                    }
                })
                .catch((error: any) => {
                    debugger;
                    if (!stale) {
                        setBlockNumber(null);
                    }
                });

            const updateBlockNumber = (blockNumber: number) => {
                setBlockNumber(blockNumber);
            };
            library.on("block", updateBlockNumber);

            return () => {
                stale = true;
                debugger;
                if (library.on) {
                    library.removeListener("block", updateBlockNumber);
                }

                setBlockNumber(undefined);
            };
        }
    }, [library, chainId]); // ensures refresh if referential identity of library doesn't change across chainIds

    return blockNumber === null ? "Error" : blockNumber ?? "";
}

function useGetBalance() {
    const { account, library, chainId } = useWeb3React();
    const isHmyLibrary = library?.messenger?.chainType === "hmy";

    const [balance, setBalance] = React.useState<string | null>();
    React.useEffect((): any => {
        if (!!account && !!library) {
            let stale = false;
            debugger;
            const accountArgs = isHmyLibrary ? { address: toBech32(account) } : account;

            library
                .getBalance(accountArgs)
                .then((balance: any) => {
                    if (isHmyLibrary) {
                        debugger;
                        balance = balance.result;
                    }
                    if (!stale) {
                        setBalance(balance);
                    }
                })
                .catch(() => {
                    if (!stale) {
                        setBalance(null);
                    }
                });

            return () => {
                stale = true;
                setBalance(undefined);
            };
        }
        if (library) {
            debugger;
        }
    }, [account, library, chainId]); // ensures refresh if referential identity of library doesn't change across chainIds

    return balance === null ? "Error" : balance ? formatEther(balance || 0) : "";
}

function useWebWallet() {
    const context = useWeb3React<Web3Provider>();
    const { connector } = context;

    // handle logic to recognize the connector currently being activated
    const [activatingConnector, setActivatingConnector] = React.useState<any>();
    React.useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined);
        }
    }, [activatingConnector, connector]);

    // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
    const triedEager = useEagerConnect();

    // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
    useInactiveListener(!triedEager || !!activatingConnector);

    const balance = useGetBalance();
    // const blockNumber = useGetBlockNumber();

    return {
        ...context,
        balance,
        triedEager,
        activatingConnector,
        setActivatingConnector,
        useGetBlockNumber,
        useGetBalance,
    };
}
export {
    connectorsByName,
    ConnectorNames,
    getErrorMessage,
    UseWebWalletProviderWrapper as UseWebWalletProvider,
    useWebWallet,
};
export default useWebWallet;
