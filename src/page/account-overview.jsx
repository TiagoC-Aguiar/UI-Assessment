import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHardHat } from "@fortawesome/free-solid-svg-icons";

import { Header } from "../components";

import "./account-overview.css";
// import PropTypes from "prop-types";

const AccountOverview = ({ data }) => {

  return (
    <div className="AccountOverview">
      {/* <FontAwesomeIcon icon={faHardHat} /> */}
      <Header contact={{name: 'teste'}} />
    </div>
  );
};

export default AccountOverview;
