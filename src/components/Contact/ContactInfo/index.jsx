import { Container } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactInfo = ({ name }) => {
  return (
    <Container>
      <span className={"name"}>{name}</span>
      <div>
        <FontAwesomeIcon size="lg" icon={faEnvelope} />
      </div>
    </Container>
  );
};

export default ContactInfo;
