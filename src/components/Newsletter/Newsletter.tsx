import styles from './Newsletter.module.css';

export const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <h2 className={styles.newsletter__title}>SUBSCRIBE TO NEWSLETTER</h2>
      <div className={styles.newsletter__description}>
        Be the first to know about new IT books,
        upcoming releases, exclusive offers and more.
      </div>
      <div className={styles.newsletter__form}>
        <input className={styles.newsletter__formInput} type='text' placeholder='Your email' />
        <button className={styles.newsletter__formButton}>SUBSCRIBE</button>
      </div>
    </div>
  );
};
