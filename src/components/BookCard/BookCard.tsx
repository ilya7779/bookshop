import { useNavigate } from 'react-router-dom';

import styles from './BookCard.module.css';
import {Book} from "../../types";

type BookCardProps = {
  book: Book
}

export const BookCard = (props: BookCardProps) => {
  const navigate = useNavigate();
  const {book: { isbn13, image, title, authors, publisher, year, price, rating }} = props;

  const openBookHandler = () => {
    // указываем переменную-параметр для использования в другой компоненте
    navigate(`/${isbn13}`);
  };

  return (
    <div className={styles.book__card} onClick={() => openBookHandler()}>
      <div className={styles.books__book}>
        <div className={styles.books__photoContainer}>
          <div className={styles.books__photo}>
            <img src={image} alt='' />
          </div>
        </div>
        <div className={styles.books__title}>{title}</div>
        <div className={styles.books__authors}>by {authors}, {publisher} {year}</div>
        <div className={styles.books__price}>
          <div className={styles.books__priceTitle}>{price}</div>
          <div className={styles.books__stars}>
            {rating}&#9733;&#9733;&#9733;&#9733;
            <span className={styles.books__greyStar}>&#9733;</span>
          </div>
        </div>
      </div>
    </div>
  );
};
