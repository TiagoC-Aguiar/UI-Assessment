import React from "react";
import { Contact } from "src/components";
import { Container, Title } from "./styled";

const Header = ({ contact }) => {
  return (
    <Container>
      <Title>
        <h1>Accountant Overview</h1>
      </Title>
      <div className="contact-container">
        <Contact name={contact.name} />
      </div>
    </Container>
  );
};

export default Header;
