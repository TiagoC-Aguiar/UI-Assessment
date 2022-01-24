import { Avatar } from "src/components";
import PropTypes from 'prop-types';
import { Container, SectionContainer } from "./styled";
import ContactInfo from './ContactInfo';

const Section = ({ name, email, phone }) => {
  return (
    <SectionContainer>
      <Avatar name={name} />
      <ContactInfo name={name} email={email} phone={phone} />
    </SectionContainer>
  );
};

const Contact = ({ name, email, phone }) => {
  return (
    <Container>
      <h2>Your Feefo support contact</h2>
      <Section name={name} email={email} phone={phone} />
    </Container>
  );
};

Contact.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Contact;
