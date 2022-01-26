/* eslint-disable @typescript-eslint/no-unused-vars */
import Torus from "assets/icons/pngs/torus.png";
import WalletConnect from "assets/icons/pngs/walletconnect.png";
import WalletLink from "assets/icons/pngs/walletlink.png";
import Metamask from "assets/icons/svgs/metamask.svg";
import { Icon } from "components/icon";
import { switchNetwork } from "hooks/use-web-wallet/network";
import { ConnectorNames, connectorsByName, getErrorMessage, useWebWallet } from "hooks/use-web-wallet/useWebWallet";
import useNotification from "hooks/useNotification";
import { FC, memo, useEffect } from "react";
import { ReactGAM } from "services/google-anlytics";
import { useGlobalDispatch } from "states/globalContext";
import "./WalletOptions.scss";

import { Client } from "@liquality/client";
import { BitcoinRpcProvider } from "@liquality/bitcoin-rpc-provider";
// import { BitcoinNetworks } from "@liquality/bitcoin-networks";

const WalletOptions: FC = () => {
    const {
        active,
        error,
        setActivatingConnector,
        activate,
        deactivate,
        triedEager,
        activatingConnector,
        connector,
        account,
    } = useWebWallet();
    const notification = useNotification();
    const globalDispatch = useGlobalDispatch();

    // const blockNumber = wallet && wallet.getBlockNumber();

    const options: any[] = [
        // { key: undefined, value: "MetaMask", icon: Metamask },
        // { connector: connectorsByName[ConnectorNames.Network], value: "Network", icon: Metamask },
        { connector: connectorsByName[ConnectorNames.Injected], value: "MetaMask", icon: Metamask },
        // { connector: connectorsByName[ConnectorNames.Frame], value: "Frame", icon: Frame },
        // { connector: connectorsByName[ConnectorNames.Portis], value: "Portis", icon: Portis },
        // { connector: connectorsByName[ConnectorNames.Fortmatic], value: "Fortmatic", icon: Fortmatic },
        { connector: connectorsByName[ConnectorNames.Torus], value: "Torus", icon: Torus },
        { connector: connectorsByName[ConnectorNames.WalletConnect], value: "WalletConnect", icon: WalletConnect },
        { connector: connectorsByName[ConnectorNames.WalletLink], value: "WalletLink", icon: WalletLink },
    ];

    const handleActive = (_connector: any) => {
        if (connector === _connector) {
            (connector as any).close();
        } else {
            setActivatingConnector(_connector);
            activate(_connector).then(() => {
                window.localStorage.removeItem("USER_DISCONNECTED_WALLET");
                globalDispatch({ type: "setWalletOptions", value: false });
            });
        }
    };
    const handleDeActive = (_connector: any) => {
        ReactGAM().trackEvent("click", "wallet option", "deactive");
        window.localStorage.setItem("USER_DISCONNECTED_WALLET", "true");
        deactivate();
        globalDispatch({ type: "setWalletOptions", value: false });
    };

    useEffect(() => {
        error && notification.error(getErrorMessage(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error]);

    const handleBTCWallet = async () => {
        debugger;
        const _window: any = window;
        _window?.bitcoin?.enable().then((data: any) => {
            debugger

            _window?.bitcoin.request({
                method: 'wallet_getConnectedNetwork',
                params: []
            }).then((data: any) => {
                debugger
            });

            // _window?.bitcoin.request({ method: 'wallet_getAddresses', params: [0, 10] }).then((data: any) => {
            //     debugger
            // });
            // _window?.bitcoin.request({
            //     method: 'wallet_signMessage', params: [
            //         'Better with code than with words',
            //         'tb1qgkptjdvfhqpyp438h2908gg63krxetkr93l984'
            //     ]
            // }).then((data: any) => {
            //     debugger
            // });


            // _window?.bitcoin.request({
            //     method: 'wallet_sendTransaction',
            //     params: ['tb1qgkptjdvfhqpyp438h2908gg63krxetkr93l984', 200000]
            // }).then((data: any) => {
            //     debugger
            // });
            _window?.bitcoin.request({
                method: 'wallet_getbalance', params: []
            }).then((data: any) => {
                debugger
            });


        });




        // const bitcoin = new Client();

        // const btcConfig: any = {
        //     rpc: {
        //         username: "user",
        //         password: "pass",
        //         url: "http://127.0.0.1:1234",
        //         addressType: "bech32",
        //         wallet: true,
        //     },
        //     network: "bitcoin_regtest",
        //     swapMode: "p2wsh",
        //     feeNumberOfBlocks: 2,
        // };

        // bitcoin.addProvider(
        //     new BitcoinRpcProvider({
        //         uri: btcConfig.rpc.url,
        //         username: btcConfig.rpc.username,
        //         password: btcConfig.rpc.password,
        //         feeBlockConfirmations: btcConfig.feeNumberOfBlocks,
        //         network: btcConfig.network,
        //     }),
        // );


        // // bitcoin.addProvider(new BitcoinLedgerProvider({ network: BitcoinNetworks.bitcoin_testnet }));

        // // Fetch addresses from Ledger wallet using a single-unified API
        // const r = await bitcoin.wallet.exportPrivateKey();

        // Sign a message
        // const signedMessageBitcoin = await bitcoin.wallet.signMessage(
        //     "The Times 3 January 2009 Chancellor on brink of second bailout for banks",
        //     bitcoinAddress || "0x",
        // );

        // Send a transaction
        // await bitcoin.chain.sendTransaction("", 1000);
    };

    return (
        <div className="wallet-options">
            <div className="wallet-options-list">
                {options?.map((option) => {
                    const currentConnector = option.connector;
                    const activating = currentConnector === activatingConnector;
                    const connected = currentConnector === connector;
                    const disabled = !triedEager || !!activatingConnector || connected;
                    return (
                        <button
                            style={{
                                border: activating
                                    ? "2px solid orange"
                                    : connected && account
                                        ? " 2px solid green"
                                        : "unset",
                                cursor: disabled ? "unset" : "pointer",
                            }}
                            key={option.value}
                            disabled={disabled}
                            onClick={() => {
                                ReactGAM().trackEvent("click", "wallet option", option?.value);
                                handleActive(option.connector);
                            }}
                        >
                            {option.value}
                            <Icon alt={"alt"} src={option.icon} />
                        </button>
                    );
                })}
                {(active || error) && <button onClick={handleDeActive}>Deactivate</button>}
                {/* <button onClick={() => switchNetwork(56)}>Switch Network</button> */}
                <button onClick={() => handleBTCWallet()}>BTC</button>
            </div>
            {error && <h4 className="wallet-options-errors">{getErrorMessage(error)}</h4>}
        </div>
    );
};
WalletOptions.defaultProps = {};
export default memo(WalletOptions);
