import React from "react";
import styles from './NewReleasesBooks.module.css';
import {NewReleasesOneBook} from "./NewReleasesOneBook";
import rightArrow from '../../../icon/similarBooks__rightArrow.svg'
import leftArrow from '../../../icon/similarBooks__leftArrow.svg'
import {Newsletter} from "./Newsletter";
import {Copyright} from "./Copyright";


export function NewReleasesBooks(props: any) {

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>New Releases Books</h1>
      <div className={styles.containerNewReleasesBooks}>
        <NewReleasesOneBook props={props}/>
        <NewReleasesOneBook props={props}/>
        <NewReleasesOneBook props={props}/>
        <NewReleasesOneBook props={props}/>
        <NewReleasesOneBook props={props}/>
        <NewReleasesOneBook props={props}/>
        <NewReleasesOneBook props={props}/>
        <NewReleasesOneBook props={props}/>
        <NewReleasesOneBook props={props}/>
        <NewReleasesOneBook props={props}/>
        <NewReleasesOneBook props={props}/>
        <NewReleasesOneBook props={props}/>
      </div>
      <div className={styles.pages}>
        <div className={styles.pagesContainer}>
          <div className={styles.pagesArrow}><img src={leftArrow} alt="leftArrow"/></div>
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
          <div className={styles.pagesArrow}><img src={rightArrow} alt="rightArrow"/></div>
        </div>
      </div>
      <Newsletter/>
      <Copyright/>
    </div>
  );
}
