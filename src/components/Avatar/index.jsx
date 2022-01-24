import PropTypes from "prop-types";
import { Container } from "./styled";

const Avatar = ({ name }) => {
  return <Container>{name[0].toUpperCase()}</Container>;
};

Avatar.propTypes = {
  letter: PropTypes.string,
};

export default Avatar;
