import React from "react";
import { Contact } from "src/components";
import { Container, Title } from "./styled";

const Header = ({ contact }) => {
  return (
    <Container>
      <Title>
        <h1>Accountant Overview</h1>
      </Title>
      <Contact
        name={contact.name}
        email={contact.email}
        phone={contact.phone}
      />
    </Container>
  );
};

export default Header;
