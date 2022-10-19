import styles from './Header.module.css';


export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__title}>BOOKSTORE</div>
        <div className={styles.header__search}>
          <input type="search"/>
        </div>
        <div className={styles.header__icons}>
          <div className={styles.icons__like}></div>
          <div className={styles.icons__cart}></div>
          <div className={styles.icons__privateArea}></div>
        </div>
      </div>
    </header>
  );
}

