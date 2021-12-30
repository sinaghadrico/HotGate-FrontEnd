/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Stake, StatusClass } from "models";
import { FC, useEffect } from "react";
import { Label, Currency, CurrencyUnit, Button, TableRow, TableCell, ButtonWidth } from "ui-components";
import "./AccountPredictorRewardsRow.scss";
import ContentLoader from "react-content-loader";
import { TransactionAddress } from "components/transaction-address";

import { Icon } from "components/icon";
import expand_logo from "assets/icons/svgs/expand.svg";

import { transactionEndpoint } from "utils/configs";

import { TotemClaimDetails } from "./totem-claim-details";
import { PairCoin } from "components/pair-coin";

import { motion, AnimatePresence } from "framer-motion";
import { Column } from "models/column";
import { useLPStaker } from "services/predictor/contract/useLPStaker";
import { useQuery } from "react-query";
import useWebWallet from "hooks/use-web-wallet/useWebWallet";

export interface AccountPredictorRewardsRowProps {
    className?: string;
    children?: React.ReactNode;
    data: any;
    expandItem: string | null;
    columns: Column[];
    refetchPoolData?: any;
    setExpandItem: (expand: string | null) => void;
}

const AccountPredictorRewardsRow: FC<AccountPredictorRewardsRowProps> = ({
    data,
    expandItem,
    setExpandItem,
    columns,
    refetchPoolData,
}: AccountPredictorRewardsRowProps) => {
    const { id, price, token, change, tvl, volume } = data;
    const isLoading = false;
    const isExpand = false;
    return (
        <>
            <TableRow
                className={
                    isExpand ? "account-predictor-rewards-row border-bottom-row" : "account-predictor-rewards-row"
                }
            >
                <TableCell dataHead={columns[0]?.title}>
                    <div className="account-predictor-rewards-row-title">
                        <PairCoin size={24} subCoin={token} />
                        {token}
                    </div>
                </TableCell>

                <TableCell dataHead={columns[1]?.title}>
                    {isLoading ? (
                        <ContentLoader
                            animate={true}
                            speed={2}
                            width={100}
                            height={50}
                            viewBox="0 0 100 10"
                            backgroundColor="#737373"
                            foregroundColor="#414244"
                        >
                            <rect x="5" y="0" rx="3" ry="3" width="100" height="6" />
                        </ContentLoader>
                    ) : (
                        <span>{price} </span>
                    )}
                </TableCell>
                <TableCell dataHead={columns[2]?.title}>
                    {isLoading ? (
                        <ContentLoader
                            animate={true}
                            speed={2}
                            width={100}
                            height={50}
                            viewBox="0 0 100 10"
                            backgroundColor="#737373"
                            foregroundColor="#414244"
                        >
                            <rect x="5" y="0" rx="3" ry="3" width="100" height="6" />
                        </ContentLoader>
                    ) : (
                        <span>{change} </span>
                    )}
                </TableCell>
                <TableCell dataHead={columns[3]?.title}>
                    {isLoading ? (
                        <ContentLoader
                            animate={true}
                            speed={2}
                            width={100}
                            height={50}
                            viewBox="0 0 100 10"
                            backgroundColor="#737373"
                            foregroundColor="#414244"
                        >
                            <rect x="5" y="0" rx="3" ry="3" width="100" height="6" />
                        </ContentLoader>
                    ) : (
                        <span>{tvl} </span>
                    )}
                </TableCell>
                <TableCell dataHead={columns[4]?.title}>
                    {isLoading ? (
                        <ContentLoader
                            animate={true}
                            speed={2}
                            width={100}
                            height={50}
                            viewBox="0 0 100 10"
                            backgroundColor="#737373"
                            foregroundColor="#414244"
                        >
                            <rect x="5" y="0" rx="3" ry="3" width="100" height="6" />
                        </ContentLoader>
                    ) : (
                        <span>{volume} </span>
                    )}
                </TableCell>
            </TableRow>
        </>
    );
};
AccountPredictorRewardsRow.defaultProps = {};
export default AccountPredictorRewardsRow;
