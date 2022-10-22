import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={styles.copyright}>
      <div className={styles.copyright__bookstore}>©2022 Bookstore</div>
      <div className={styles.copyright__rights}>All rights reserved</div>
    </div>
  );
};
