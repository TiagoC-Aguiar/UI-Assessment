import { Container, SalesContent } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const SalesCard = () => {
  return (
    <Container>
      <SalesContent>
        <div className="sales-header">
          <div>
            <FontAwesomeIcon size="lg" color={"#3fb0eb"} icon={faUpload} />
            <span className="sales">Sales</span>
          </div>
          <FontAwesomeIcon size="lg" color={"#777"} icon={faInfoCircle} />
        </div>
        <span>You had 0 uploads and 0 lines added.</span>
      </SalesContent>
      <div>
        <div>0% upload</div>
        <div>0% lines</div>
      </div>
    </Container>
  );
};

export default SalesCard;
