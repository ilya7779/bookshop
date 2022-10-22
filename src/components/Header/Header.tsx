import styles from './Header.module.css';
import Favorites from '../../icon/Favorites.svg'
import Сart from '../../icon/Сart.svg'
import privateArea from '../../icon/privateArea.svg'
import {Search} from "./Search";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__title}>BOOKSTORE</div>
        <Search />
        <div className={styles.header__icons}>
          <div className={styles.icons__like}><img src={Favorites} alt=""/></div>
          <div className={styles.icons__cart}><img src={Сart} alt=""/></div>
          <div className={styles.icons__privateArea}><img src={privateArea} alt=""/></div>
        </div>
      </div>
    </header>
  );
}

