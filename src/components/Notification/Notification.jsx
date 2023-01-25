import PropTypes from 'prop-types';

import styles from './notification.module.css';
const Notification = ({ message }) => {
  return <p className={styles.notification}>{message}</p>;
};

export default Notification;
Notification.protoTypes = {
  message: PropTypes.string.isRequired,
};