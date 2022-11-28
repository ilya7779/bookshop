import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './BookCard.module.css';
import type { Book } from '../../types';

type BookCardProps = {
  book: Book
}

export const BookCard: FC<BookCardProps> = ({ book }) => {
  const navigate = useNavigate();

  const openBookHandler = () => {
    // указываем переменную-параметр для использования в другой компоненте
    navigate(`/${book.isbn13}`);
  };

  return (
    <div className={styles.book__card} onClick={() => openBookHandler()}>
      <div className={styles.books__book}>
        <div className={styles.books__photoContainer}>
          <div className={styles.books__photo}>
            <img src={book.image} alt='' />
          </div>
        </div>

        <div className={styles.books__title}>{book.title}</div>
        <div className={styles.books__subTitle}>{book.subtitle}</div>
        <div className={styles.books__price}>
          <div className={styles.books__priceTitle}>{book.price}</div>
          <div className={styles.books__stars}>
            &#9733;&#9733;&#9733;&#9733;
            <span className={styles.books__greyStar}>&#9733;</span>
          </div>
        </div>
      </div>
    </div>
  );
};
