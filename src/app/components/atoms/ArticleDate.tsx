import React, { FC } from "react";

// css import
import styles from "./styles/ArticleDate.module.css";



// props type
type Props = {
  id: number;
  imgBool: boolean;
  date: string;
  size?: 'small' | 'medium' | 'large';
};


const ArticleDate: React.FC<Props> = ({ id, imgBool, date, size = "medium" }) => {
  return (
    <div className={`${styles.datebox} ${styles[size]}`} key={id}>
      {
        imgBool ? (
          <img className={styles.icon} src="/img/refresh.png" alt="writeDate" />
        ) : (
          <img className={styles.icon} src="/img/calendar.png" alt="LastEfitDate" />
        )
      }
      <p className={styles.date}>{date}</p>
    </div>
  )
}

export default ArticleDate;