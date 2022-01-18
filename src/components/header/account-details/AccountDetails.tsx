/* eslint-disable prefer-const */
import { FC } from "react";
import { useWebWallet } from "hooks/use-web-wallet/useWebWallet";
import { useGlobalDispatch } from "states/globalContext";
import { Icon } from "components/icon";
import "./AccountDetails.scss";

// import { useQuery } from "react-query";
import logo from "assets/icons/svgs/totem.svg";
// import { formatNumberWithCommas } from "utils/number";
// import { useUsdcToken } from "services/useUsdcToken";

const AccountDetails: FC = () => {
    let { active, account } = useWebWallet();
    // const token = useUsdcToken();
    // const { data: balance } = useQuery(["token-balance", account], () => token.getBalance(account), {
    //     enabled: !!token.contract,
    // });

    const globalDispatch = useGlobalDispatch();

    const accountAddress =
        account && account?.length
            ? `${account.substr(0, 15)}...${account.substr(account.length - 4, account.length - 1)}`
            : null;
    return active ? (
        <div className="account-details-wrapper" onClick={() => globalDispatch({ type: "toggleWalletOptions" })}>
            <div className="account-details">
                <span>
                    <Icon src={logo} style={{ width: 20 }} />
                </span>
                <span>{accountAddress}</span>
            </div>
        </div>
    ) : null;
};
AccountDetails.defaultProps = {};
export default AccountDetails;
