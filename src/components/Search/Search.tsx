import { useEffect, useState } from 'react';

import styles from './Search.module.css';
import { IconSearch } from '../../assets';

export const Search = () => {

  const [books, setBooks] = useState<any[]>([]);
  const [value, setValue] = useState('');

  const filteredBooks = books.filter(books => {
    return books.title.toLowerCase().includes(value.toLowerCase());
  });

  // const searchHandler = async (event: React.ChangeEvent<HTMLInputElement>)=> {
  //   let key = event.target.value;
  //   if (key) {
  //     let result = await fetch(`https://api.itbook.store/1.0/search/mongodb/${key}`);
  //     result = await result.json()
  //     if(result) {
  //       setBooks(result)
  //     }
  //   }
  // }

  return (
    <div>
      <div className={styles.form}>
        <form className={styles.search__form}>
          <input
            className={styles.search__input}
            placeholder='Search'
            type='text'
            // onChange={searchHandler} />
            onChange={(event) => setValue(event.target.value)}
          />
          <IconSearch />
          {/*<img src={iconSearch} alt='' />*/}
        </form>
      </div>
      <div className={styles.books}>

        {/*{filteredBooks.map((book, isbn13) =>*/}
        {/*  <NewReleasesOneBook book={book} key={isbn13}/>*/}
        {/*)}*/}
      </div>
    </div>
  );
};
