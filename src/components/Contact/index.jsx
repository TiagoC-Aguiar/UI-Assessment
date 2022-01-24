import { Avatar } from "src/components";
import PropTypes from 'prop-types';
import { Container, SectionContainer } from "./styled";
import ContactInfo from './ContactInfo';

const Section = ({ name }) => {
  return (
    <SectionContainer>
      <Avatar name={name} />
      <ContactInfo name={name} />
    </SectionContainer>
  );
};

const Contact = ({ name }) => {
  return (
    <Container>
      <h2>Your Feefo support contact</h2>
      <Section name={name} />
    </Container>
  );
};

Contact.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Contact;
