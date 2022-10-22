import styles from './Search.module.css';
import iconSearch from '../../icon/iconSearch.svg';
import React, {useState} from "react";
import {NewReleasesOneBook} from "../Main/NewReleasesBooks/NewReleasesOneBook";


export const Search = () => {

  const [books, setBooks] = React.useState<any[]>([]);
  React.useEffect(() => {
    // fetch('https://api.itbook.store/1.0/search/mongodb')
    fetch('https://api.itbook.store/1.0/new')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        setBooks(json.books)
      })
  }, []);

  const [value, setValue] = useState('')
  const filteredBooks = books.filter(books => {
    return books.title.toLowerCase().includes(value.toLowerCase())
  })
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
            placeholder="Search"
            type="text"
            // onChange={searchHandler} />
           onChange={(event) => setValue(event.target.value)} />
          <img src={iconSearch} alt=""/>
        </form>
      </div>
      <div className={styles.books}>

        {/*<h1>sfsdfsdfsdfsdfsdf</h1>*/}
        {/*<h1>sfsdfsdfsdfsdfsdf</h1>*/}
        {/*<h1>sfsdfsdfsdfsdfsdf</h1>*/}
        {/*<h1>sfsdfsdfsdfsdfsdf</h1>*/}
        {/*<h1>sfsdfsdfsdfsdfsdf</h1>*/}
        {/*<h1>sfsdfsdfsdfsdfsdf</h1>*/}
        {/*<h1>sfsdfsdfsdfsdfsdf</h1>*/}
        {/*<h1>sfsdfsdfsdfsdfsdf</h1>*/}
        {/*{filteredBooks.map((book, isbn13) =>*/}
        {/*  <NewReleasesOneBook book={book} key={isbn13}/>*/}
        {/*)}*/}
      </div>
    </div>
  );
}

