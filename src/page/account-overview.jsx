import React from "react";
import { Header, SalesCard } from "../components";
import "./account-overview.css";

const AccountOverview = ({ data }) => {
  return (
    <div className="AccountOverview">
      <div className="AccountContainer">
        <Header contact={data.supportContact} />
        <SalesCard />
      </div>
    </div>
  );
};

export default AccountOverview;
