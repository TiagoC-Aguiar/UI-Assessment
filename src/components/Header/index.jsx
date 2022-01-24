import React from "react";
import { Contact } from "src/components";
import { Container } from "./style";

const Header = ({ contact }) => {
  return (
    <Container>
      <div className="title">
        <h1>Accountant Overview</h1>
      </div>
      <div className="contact-container">
        <Contact name={contact.name} />
      </div>
    </Container>
  );
};

export default Header;
