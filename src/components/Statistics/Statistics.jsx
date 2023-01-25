import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const Statistics = props => {
  const { positivePercentage, ...opts } = props;
  return (
    <ul className={styles.list}>
      {Object.entries(opts).map(([key, val]) => {
        return (
          <li key={key} className={styles.item}>
            {key}: <span className={styles.value}> {val}</span>
          </li>
        );
      })}
      <li key="PositivePercentage" className={styles.item}>
        Positive Feedback:
        <span className={styles.value}> {positivePercentage}%</span>
      </li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};