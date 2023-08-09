import React, { FC } from "react";


// css import
import styles from "./styles/TagsBox.module.css";
import Tags from "../atoms/CategoryTag";


const TagsBox: React.FC = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.titleArea}>
          <h3 className={styles.title}>
            タグ一覧
          </h3>
        </div>
        <div className={styles.flex}>
          <Tags id={1} tagsNumber={[1]} />
        </div>
      </div>
    </div>
  )
}


export default TagsBox;