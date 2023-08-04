import React, { FC } from "react";

// css import
import styles from "./styles/TopBlogCard.module.css";

// props type
type Props = {
  id: number;
  imgUrl: string;
  title: string;
  date: string;
  text: string;
}


const TopBlogCard: React.FC<Props> = ({ id, imgUrl, title, date, text }) => {
  return (
    <div className={styles.topCard} key={id}>
      <div className={styles.imgBox}>
        <img className={styles.img} src={imgUrl} alt="topCardImg" />
      </div>
      <div className={styles.textBox}>
        <h2 className={styles.title}>
          {title}
        </h2>
        <p className={styles.date}>
          {date}
        </p>
        <p className={styles.text}>
          {text}
        </p>
        <div className={styles.tagsBox}>
          tags
        </div>
      </div>
    </div>
  )
}

export default TopBlogCard;