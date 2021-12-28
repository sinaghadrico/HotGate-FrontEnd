import account_logo from "assets/icons/svgs/account.svg";
// import totem_logo from "assets/icons/svgs/totem.svg";
import { Icon } from "components/icon";
import { FC } from "react";
import { NavLink, useHistory } from "react-router-dom";
// import { ReactGAM } from "services/google-anlytics";
import "./Sidebar.scss";

const Sidebar: FC = () => {
    const history = useHistory() as any;
    const pathname = history?.location?.pathname;
    const activeLink = pathname === "/";
    return (
        <div className="sidebar">
            <NavLink to="/exchange" replace={false} activeClassName="active" rel="noopener noreferrer">
                <Icon src={account_logo} className={activeLink ? "active" : ""} />
                Exchange
            </NavLink>

            <NavLink to="/cross-chain-exchange" replace={false} activeClassName="active" rel="noopener noreferrer">
                <Icon src={account_logo} /> Cross-Chain Exchange
            </NavLink>
            <NavLink to="/cross-chain-transfer" replace={false} activeClassName="active" rel="noopener noreferrer">
                <Icon src={account_logo} /> Cross-Chain Transfer
            </NavLink>
            <NavLink to="/liquidity-pools" replace={false} activeClassName="active" rel="noopener noreferrer">
                <Icon src={account_logo} /> Liquidity Pools
            </NavLink>
            <NavLink to="/tokens" replace={false} activeClassName="active" rel="noopener noreferrer">
                <Icon src={account_logo} /> Tokens
            </NavLink>
        </div>
    );
};
Sidebar.defaultProps = {};
export default Sidebar;
