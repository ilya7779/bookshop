import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import styles from './Main.module.css';
import { IconArrowLeft, IconArrowRight } from '../../assets';
import { BookCard, Newsletter } from '../../components';
import {
  getNewBooksTC,
  newBooksSelector, searchBooksTC,
  searchResultSelector,
  searchTermSelector,
  useAppDispatch,
} from '../../store';

export const Main = () => {
  const dispatch = useAppDispatch();

  const bookList = useSelector(newBooksSelector);
  const searchResult = useSelector(searchResultSelector);
  const searchTerm = useSelector(searchTermSelector);
  const isSearch = searchTerm.length !== 0;

  useEffect(() => {
    dispatch(getNewBooksTC());
  }, []);

  useEffect(() => {
    if (!isSearch) return;

    dispatch(searchBooksTC());
  }, [searchTerm]);

  // оптимизация
  const books = useMemo(() => {
    const source = isSearch ? (searchResult?.books ?? []) : bookList;

    return source.map((book) =>
      <BookCard book={book} key={book.isbn13} />,
    );
  }, [bookList, searchResult, isSearch]);

  // без оптимизации
  // const books = bookList.map(book =>
  //   <BookCard book={book} key={book.isbn13} />,
  // );

  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>
        {isSearch ? `'${searchTerm}' search results` : 'New Releases Books'}
      </h1>

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
