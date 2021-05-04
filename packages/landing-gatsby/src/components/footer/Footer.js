import React from 'react';
import styles from '../../css/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        copyright &copy; Developed By Hakukonestudio Artify{' '}
        {new Date().getFullYear()} with GatsbyJS * Headless WordPress * Github *
        Netlify
      </div>
    </footer>
  );
};

export default Footer;
