import PropTypes from 'prop-types';
import styles from './options.module.css';

const Options = ({ options, onLeaveFeedback }) => {
  const elements = options.map(key => (
    <button
      key={key}
      onClick={() => {
        onLeaveFeedback(key);
      }}
      className={styles.btn}
    >
      {key}
    </button>
  ));
  return <div className={styles.options}>{elements}</div>;
};

export default Options;

Options.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};