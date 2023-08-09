import React, { FC } from "react";


// css import
import styles from "./styles/TagsBox.module.css";
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
          <div className={styles.flexBox}>
            <CategoryTag id={1} tagsNumber={0} />
            <CategoryTag id={1} tagsNumber={1} />
            <CategoryTag id={1} tagsNumber={2} />
            <CategoryTag id={1} tagsNumber={3} />
            <CategoryTag id={1} tagsNumber={4} />
            <CategoryTag id={1} tagsNumber={5} />
          </div>
          <div className={styles.flexBox}>
            <CategoryTag id={1} tagsNumber={6} />
            <CategoryTag id={1} tagsNumber={7} />
            <CategoryTag id={1} tagsNumber={8} />
            <CategoryTag id={1} tagsNumber={9} />
            <CategoryTag id={1} tagsNumber={10} />
            <CategoryTag id={1} tagsNumber={11} />
          </div>
          <div className={styles.flexBox}>
            <CategoryTag id={1} tagsNumber={12} />
            <CategoryTag id={1} tagsNumber={13} />
            <CategoryTag id={1} tagsNumber={14} />
            <CategoryTag id={1} tagsNumber={15} />
            <CategoryTag id={1} tagsNumber={16} />
            <CategoryTag id={1} tagsNumber={17} />
          </div>
          <div className={styles.flexBox}>
            <CategoryTag id={1} tagsNumber={18} />
          </div>
        </div>
      </div>
    </div>
  )
}


export default TagsBox;