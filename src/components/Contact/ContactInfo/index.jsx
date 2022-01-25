import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { Container } from "./styled";

const ContactValue = ({ value, icon }) => {
  return (
    <>
      <FontAwesomeIcon className="icon" size="lg" icon={icon} />
      <span className={"info"}>{value}</span>
    </>
  );
};

const ContactInfo = ({ name, email, phone }) => {
  return (
    <Container>
      <span className={"name"}>{name}</span>
      <div className="section">
        <ContactValue value={email} icon={faEnvelope} />
        <ContactValue value={phone} icon={faPhoneSquare} />
      </div>
    </Container>
  );
};

ContactValue.propTypes = {
  value: PropTypes.string.isRequired,
  icon: PropTypes.any,
};

export default ContactInfo;
