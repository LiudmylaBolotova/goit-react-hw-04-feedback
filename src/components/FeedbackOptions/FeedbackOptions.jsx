import PropTypes from 'prop-types';
import { FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onClickButton }) => {
  return Object.keys(options).map(option => (
    <div key={option}>
      <FeedbackButton type="button" onClick={() => onClickButton(option)}>
        {option}
      </FeedbackButton>
    </div>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onClickButton: PropTypes.func.isRequired,
};
