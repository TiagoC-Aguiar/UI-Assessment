import React from "react";
import { Header } from "../components";
import "./account-overview.css";

const AccountOverview = ({ data }) => {

  return (
    <div className="AccountOverview">
      <Header contact={data.supportContact} />
    </div>
  );
};

export default AccountOverview;
