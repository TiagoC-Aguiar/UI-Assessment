import React from "react";
import { Avatar } from "../";
import { Container } from "./style";

const Header = ({ contact }) => {
  //   console.log("CONTACT: ", contact);

  return (
    <Container>
      <div className="title">
        <h1>Accountant Overview</h1>
      </div>
      <div className="contact-container">
        <h2>YOUR FEEFO SUPPORT CONTACT</h2>
        <Avatar />
        <div>Suport: {contact.name}</div>
      </div>
    </Container>
  );
};

export default Header;
