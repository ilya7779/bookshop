import { useEffect, useState } from 'react';

import { IconArrowLeft, IconArrowRight } from '../../../assets';
import styles from './NewReleasesBooks.module.css';
import { NewReleasesOneBook } from './NewReleasesOneBook';
import { Newsletter } from './Newsletter';
import { Copyright } from './Copyright';


export function NewReleasesBooks (props: any) {
  const [open, setOpen] = useState(false);

  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://api.itbook.store/1.0/new').then((response) => {
      return response.json();
    }).then((json) => {
      setBooks(json.books);
    });
  }, []);


  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>New Releases Books</h1>
      <div className={styles.containerNewReleasesBooks}>
        {/*{open && (*/}

        {/*)}*/}
        {books.map(book =>
          <NewReleasesOneBook book={book} key={book.isbn13} />,
        )}
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
      <Copyright />
    </div>
  );
}
