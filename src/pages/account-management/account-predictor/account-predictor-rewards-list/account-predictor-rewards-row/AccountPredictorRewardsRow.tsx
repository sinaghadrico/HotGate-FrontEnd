/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { FC } from "react";
import { TableRow, TableCell } from "ui-components";
import "./AccountPredictorRewardsRow.scss";
import ContentLoader from "react-content-loader";



import { PairCoin } from "components/pair-coin";


import { Column } from "models/column";


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

    columns,

}: AccountPredictorRewardsRowProps) => {
    const { address, price, symbol, change = "0", tvl, amount } = data;
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
                        <PairCoin size={24} subCoin={symbol} />
                        {symbol}
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
                        <span>{amount} </span>
                    )}
                </TableCell>
            </TableRow>
        </>
    );
};
AccountPredictorRewardsRow.defaultProps = {};
export default AccountPredictorRewardsRow;
