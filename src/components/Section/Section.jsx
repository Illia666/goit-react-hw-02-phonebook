import PropTypes from 'prop-types';

import styles from './section.module.css';

const Section = ({ children, title }) => {
  return (
    <section>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};