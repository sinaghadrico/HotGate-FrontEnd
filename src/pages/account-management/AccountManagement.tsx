/* eslint-disable @typescript-eslint/no-empty-function */
import { FC } from "react";

import { Helmet } from "react-helmet-async";
import "./AccountManagement.scss";

import { AccountPredictor } from "./account-predictor";

const AccountManagement: FC = () => {
    return (
        <>
            <Helmet>
                <title> Tokens </title>
                <meta name="description" content="Tokens" />
            </Helmet>

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
