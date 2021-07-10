import React from 'react';
import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(({ id, label }) => (
        <button
          type="button"
          key={id}
          className={styles.btn}
          onClick={() => onLeaveFeedback(label)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.protoTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
