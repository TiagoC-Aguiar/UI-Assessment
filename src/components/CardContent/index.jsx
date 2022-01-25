import PropTypes from 'prop-types';
import {Container} from './styled';

const CardContent = ({percentage, description}) => {
  return (
    <Container>
      <span className="percentage">{percentage}%</span>
      <span className="description">{description}</span>
    </Container>
  );
};

CardContent.propTypes = {
    percentage: PropTypes.number,
    description: PropTypes.string.isRequired,
}

CardContent.defaultProps = {
    percentage: 0
}

export default CardContent;
