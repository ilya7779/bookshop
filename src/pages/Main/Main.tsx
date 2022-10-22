import { useEffect, useMemo, useState } from 'react';

import styles from './Main.module.css';
import { IconArrowLeft, IconArrowRight } from '../../assets';
import { BookCard, Newsletter } from '../../components';

export const Main = () => {

  const [bookList, setBookList] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://api.itbook.store/1.0/new').then((response) => {
      return response.json();
    }).then((json) => {
      setBookList(json.books);
    });
  }, []);

  // оптимизация
  const books = useMemo(() => {
    return bookList.map(book =>
      <BookCard book={book} key={book.isbn13} />,
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
