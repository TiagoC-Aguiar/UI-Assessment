import { Container } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactInfo = ({ name, email, phone }) => {
  return (
    <Container>
      <span className={"name"}>{name}</span>
      <div>
        <FontAwesomeIcon size="lg" icon={faEnvelope} />
        <span className={'info'}>{email}</span>
        <span className={'info phone'}>{phone}</span>
      </div>
    </Container>
  );
};

export default ContactInfo;
