import React, { FC } from "react";


// css import
import styles from "./styles/TagsBox.module.css";
import Tags from "../atoms/CategoryTag";
import CategoryTag from "../atoms/CategoryTag";

// props type
type Props = {
  id: number;
  title: string;
}


const TagsBox: React.FC<Props> = ({ id, title }) => {
  return (
    <div className={styles.box} key={id}>
      <div className={styles.container}>
        <div className={styles.titleArea}>
          <h3 className={styles.title}>
            {title}
          </h3>
        </div>
        <div className={styles.flex}>
          <CategoryTag id={1} tagsNumber={0} />
          <CategoryTag id={1} tagsNumber={1} />
        </div>
      </div>
    </div>
  )
}


export default TagsBox;