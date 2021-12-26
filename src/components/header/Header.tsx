import { FC } from "react";
import { AccountDetails } from "./account-details";
import { ConnectWallet } from "./connect-wallet";
import { WalletOptions } from "components/wallet-options";
import { Modal } from "ui-components";
import { MobileMenu } from "components/mobile-menu";
import { ReactComponent as HotGateLogo } from "assets/icons/svgs/main-logo.svg";
import { useGlobalState, useGlobalDispatch } from "states/globalContext";
// import { ThemeSelector } from "./theme-selector";
import "./Header.scss";

const Header: FC = () => {
    const { walletOptions } = useGlobalState();
    const globalDispatch = useGlobalDispatch();
    return (
        <div className="header">
            <MobileMenu />
            <div className="header-title">
                <HotGateLogo width="150" />
            </div>
            <ConnectWallet>
                <AccountDetails />
            </ConnectWallet>
            <Modal
                title="Connect Wallet"
                open={walletOptions}
                width="30"
                maxHeight="620"
                onClose={() => globalDispatch({ type: "setWalletOptions", value: false })}
            >
                <WalletOptions />
            </Modal>
            {/* <ThemeSelector /> */}
        </div>
    );
};
Header.defaultProps = {};
export default Header;
