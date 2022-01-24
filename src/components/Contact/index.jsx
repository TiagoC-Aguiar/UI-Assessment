import { Avatar } from "src/components";
import PropTypes from 'prop-types';
import { Container, SectionContainer } from "./styled";

const Section = ({ name }) => {
  return (
    <SectionContainer>
      <Avatar name={name} />
      <div>Suport: {name}</div>
    </SectionContainer>
  );
};

const Contact = ({ name }) => {
  return (
    <Container>
      <h2>YOUR FEEFO SUPPORT CONTACT</h2>
      <Section name={name} />
    </Container>
  );
};

Contact.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Contact;
