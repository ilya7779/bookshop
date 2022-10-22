import React from "react";
import styles from './NewReleasesBooks.module.css';


export function NewReleasesOneBook(props: any) {
  return (
    <div className={styles.books}>
      <div className={styles.books__book}>
        <div className={styles.books__photoContainer}>
          <div className={styles.books__photo}><img src={props.book.image} alt=""/></div>
        </div>
        <div className={styles.books__title}>{props.book.title}</div>
        <div className={styles.books__authors}>by {props.book.authors}, {props.book.publisher} {props.book.year}</div>
        <div className={styles.books__price}>
          <div className={styles.books__priceTitle}>{props.book.price}</div>
          <div className={styles.books__stars}>{props.book.rating}&#9733;&#9733;&#9733;&#9733;
            <span className={styles.books__greyStar}>&#9733;</span>
          </div>
        </div>
      </div>
    </div>
  );
}