import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Main.module.css';
import { IconArrowLeft, IconArrowRight } from '../../assets';
import { BookCard, Newsletter } from '../../components';
import {getBooksTC, newBooksSelector} from '../../store';

export const Main = () => {
  const dispatch = useDispatch();

  const bookList = useSelector(newBooksSelector);

  useEffect(() => {
    // @ts-ignore
    dispatch(getBooksTC())
  }, [dispatch]);

  // оптимизация
  const books = useMemo(() => {
    return bookList.map((book: any) =>
      <BookCard book={book} key={book.isbn13} />
    );
  }, [bookList]);
  // без оптимизации
  // const books = bookList.map(book =>
  //   <BookCard book={book} key={book.isbn13} />,
  // );


  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>New Releases Books</h1>
      <div className={styles.containerNewReleasesBooks}>
        {books}
      </div>
      <div className={styles.pages}>
        <div className={styles.pagesContainer}>
          <div className={styles.pagesArrow}>
            <IconArrowLeft />
          </div>
          <div className={styles.pagesTitle}>Prev</div>
        </div>
        <div className={styles.pagesNumbers}>
          <div className={styles.pagesNumber}>1</div>
          <div className={styles.pagesNumber}>2</div>
          <div className={styles.pagesNumber}>3</div>
          <div className={styles.pagesNumber}>...</div>
          <div className={styles.pagesNumber}>6</div>
        </div>
        <div className={styles.pagesContainer}>
          <div className={styles.pagesTitle}>Next</div>
          <div className={styles.pagesArrow}>
            <IconArrowRight />
          </div>
        </div>
      </div>

      <Newsletter />
    </main>
  );
};
