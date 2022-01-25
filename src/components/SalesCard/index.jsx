import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { CardContent } from "src/components";
import { Container, SalesContent, UploadsLines } from "./styled";

const SalesCard = ({ sales }) => {
  const props = [
    {
      percentage: sales.successfulUploads,
      description: "upload success",
    },
    {
      percentage: sales.linesSaved,
      description: "lines saved",
    },
  ];

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
        {props.map((value) => {
          return <CardContent key={value.description} {...value} />;
        })} 
      </UploadsLines>
    </Container>
  );
};

export default SalesCard;
