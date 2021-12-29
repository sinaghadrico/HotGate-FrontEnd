/* eslint-disable @typescript-eslint/no-empty-function */
import { FC } from "react";

// import { Helmet } from "react-helmet-async";
import "./AccountManagement.scss";

import { AccountPredictor } from "./account-predictor";
import { Box } from "components/box";

const AccountManagement: FC = () => {
    return (
        <>
            {/* <Helmet>
                <title> Account Management </title>
                <meta name="description" content="Account Management" />
            </Helmet> */}
            <Box
                title="Exchange"
                description="Change your tokens to different tokens on the same chain."
                submitTitle="Exchange"
                haveSetting
            ></Box>
            <div className="account-management">
                <div className="row  ">
                    <div className="col-md-12 ">
                        <AccountPredictor />
                    </div>
                </div>
            </div>
        </>
    );
};
AccountManagement.defaultProps = {};
export default AccountManagement;
