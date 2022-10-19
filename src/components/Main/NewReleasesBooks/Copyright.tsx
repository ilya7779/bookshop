import React from "react";
import styles from './Copyright.module.css';

export function Copyright(props: any) {

  return (
    <div className={styles.copyright}>
      <div className={styles.copyright__bookstore}>©2022 Bookstore</div>
      <div className={styles.copyright__rights}>All rights reserved</div>
    </div>
  );
}
