import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import styles from './Main.module.css';
import { BookCard, Newsletter, Pagination } from '../../components';
import {
  getNewBooksTC,
  newBooksSelector,
  searchBooksTC,
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

  const searchBooks = (pageNumber = 1) => {
    dispatch(searchBooksTC(pageNumber));
  };

  useEffect(() => {
    dispatch(getNewBooksTC());
  }, []);

  useEffect(() => {
    if (!isSearch) return;

    searchBooks();
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

      {isSearch ? <Pagination
        total={Number(searchResult?.total ?? 1)}
        fetchNewData={searchBooks}
      /> : null}
      <Newsletter />
    </main>
  );
};
