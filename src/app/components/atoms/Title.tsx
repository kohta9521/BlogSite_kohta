import React, { FC} from "react";

// css import
import styles from "./Title.module.css";

// interface type
interface titleProps {
  id: number;
  text: string;
  link: string;
  size?: 'small' | 'medium' | 'large';
}


const Title: React.FC<titleProps> = ({ id, text, link, size = 'medium' }) => {
  return (
    <div className={styles.titleBox} key={id} id={link}>
      <h1 className={`${styles.titleText} ${styles[size]}`}>
      {text}
      </h1>
    </div>
  )
}

export default Title;