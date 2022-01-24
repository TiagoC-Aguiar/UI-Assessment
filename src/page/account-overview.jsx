import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHardHat } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { Header } from "../components";

import "./account-overview.css";

export const AccountOverview = ({ data }) => {
  console.log(data);

  return (
    <div className="AccountOverview">
      {/* <FontAwesomeIcon icon={faHardHat} /> */}
      <Header />
    </div>
  );
};

export default AccountOverview;
