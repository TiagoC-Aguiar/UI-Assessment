import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Container, SalesContent, UploadsLines } from "./styled";

const SalesCard = ({ sales }) => {
  return (
    <Container>
      <SalesContent>
        <div className="sales-header">
          <div className="sales-title">
            <FontAwesomeIcon size="lg" color={"#3fb0eb"} icon={faUpload} />
            <span className="sales">Sales</span>
          </div>
          <FontAwesomeIcon size="lg" color={"#888"} icon={faInfoCircle} />
        </div>
        <span>
          You had <strong>{sales.uploads} uploads</strong> and{" "}
          <strong>{sales.linesAttempted}</strong> lines added.
        </span>
      </SalesContent>
      <UploadsLines>
        <div className="card-content">
          <span className="percentage">{sales.successfulUploads}%</span>
          <span className="description">upload success</span>
        </div>
        <div className="card-content">
          <span className="percentage">{sales.linesSaved}%</span>
          <span className="description">lines saved</span>
        </div>
      </UploadsLines>
    </Container>
  );
};

export default SalesCard;
