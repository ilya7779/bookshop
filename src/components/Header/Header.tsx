import styles from './Header.module.css';
import { IconCart, IconHeart, IconUser } from '../../assets';
import { Search } from '../Search';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__title}>BOOKSTORE</div>
        <Search />
        <div className={styles.header__icons}>
          <div className={styles.icons__like}>
            <IconHeart />
          </div>
          <div className={styles.icons__cart}>
            <IconCart />
          </div>
          <div className={styles.icons__privateArea}>
            <IconUser />
          </div>
        </div>
      </div>
    </header>
  );
};
