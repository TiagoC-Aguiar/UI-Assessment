import { Container } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";

const ContactInfo = ({ name, email, phone }) => {
  return (
    <Container>
      <span className={"name"}>{name}</span>
      <div>
        <FontAwesomeIcon size="lg" icon={faEnvelope} />
        <span className={'info'}>{email}</span>
        <FontAwesomeIcon size="lg" icon={faPhoneSquare} />
        <span className={'info'}>{phone}</span>
      </div>
    </Container>
  );
};

export default ContactInfo;
