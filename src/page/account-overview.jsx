import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Header, SalesCard } from "../components";
import "./account-overview.css";

const AccountOverview = ({ data }) => {

  useEffect(() => {
    document.title = "Account Overview";
  }, []);

  return (
    <div className="AccountOverview">
      <div className="AccountContainer">
        <Header contact={data.supportContact} />
        <SalesCard sales={data.salesOverview} />
      </div>
    </div>
  );
};

AccountOverview.propTypes = {
  data: PropTypes.shape({
    supportContact: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }),
    salesOverview: PropTypes.shape({
      uploads: PropTypes.number,
      successfulUploads: PropTypes.number,
      linesAttempted: PropTypes.number,
      linesSaved: PropTypes.number,
      lastUploadDate: PropTypes.number,
    }),
  }).isRequired,
};

export default AccountOverview;
