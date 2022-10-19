import React from "react";
import styles from './NewReleasesBooks.module.css';


export function NewReleasesOneBook(props: any) {
  return (
    <div className={styles.books}>
      <div className={styles.books__book}>
        <div className={styles.books__photoContainer}>
          <div className={styles.books__photo}><img src={props.props.image} alt=""/></div>
        </div>
        <div className={styles.books__title}>{props.props.title}</div>
        <div className={styles.books__authors}>by {props.props.authors}, {props.props.publisher} {props.props.year}</div>
        <div className={styles.books__price}>
          <div className={styles.books__priceTitle}>{props.props.price}</div>
          <div className={styles.books__stars}>{props.props.rating}&#9733;&#9733;&#9733;&#9733;
            <span className={styles.books__greyStar}>&#9733;</span>
          </div>
        </div>
      </div>
    </div>
  );
}