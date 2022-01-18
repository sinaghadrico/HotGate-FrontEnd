/* eslint-disable @typescript-eslint/no-unused-vars */
import { ContractTransaction } from "ethers";
import useWebWallet, { getErrorMessage } from "hooks/use-web-wallet/useWebWallet";
import useNotification from "hooks/useNotification";

import { useLiquidityPoolFactoryContract } from "services/contracts";

export const useLiquidityPoolFactory = () => {
    const notification = useNotification();
    const contractMethod: any = useLiquidityPoolFactoryContract();

    //write-contract

    // const claim = () => {
    //     return new Promise((resolve: (response: any) => void, reject) => {
    //         contractMethod
    //             ?.claim()
    //             .call()
    //             .then((transaction: ContractTransaction) => {
    //                 debugger;
    //                 notification.success("claim confirmed");
    //                 // transaction.wait(1).then(() => {
    //                 //     notification.success("claim confirmed");
    //                 //     resolve(transaction);
    //                 // });
    //             })
    //             .catch((error: any) => {
    //                 notification.error(getErrorMessage(error));
    //                 reject(error);
    //             });
    //     });
    // };

    //read contract

    const getAllLiquidityPools = () => {
        return contractMethod
            .allLiquidityPools(10)
            .then((data: any) => {
                debugger;
                return {};
            })
            .catch((error: any) => {
                debugger;
                notification.error(getErrorMessage(error));
            });
    };

    //how to use
    // const { data: startDate, loading } = useQuery("StartDate", () => getStartDate());

    return {
        getAllLiquidityPools,

        contract: contractMethod || undefined,
    };
};
