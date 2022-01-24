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

// AccountOverview.propTypes = {
//   data: PropTypes.shape({
//     supportContact: PropTypes.shape({
//       name: PropTypes.string,
//       email: PropTypes.string,
//       phone: PropTypes.string,
//     }).isRequired,
//     salesOverview: PropTypes.shape({
//       uploads: PropTypes.number,
//       successfulUploads: PropTypes.number,
//       linesAttempted: PropTypes.number,
//       linesSaved: PropTypes.number,
//       lastUploadDate: PropTypes.number,
//     }).isRequired,
//   }).isRequired,
// };

export default AccountOverview;
