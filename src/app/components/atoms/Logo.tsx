import React, { FC } from "react";

// css import
import styles from "./Logo.module.css";

// props type
interface logoSizeProps  {
  link?: string;
  size?: 'small' | 'medium' | 'large';
}


const Logo: React.FC<logoSizeProps> = ({ link = "/", size = "medium"}) => {
  return (
    <>
        <a className={`${styles.logoArea} ${styles[size]}`} href={link}>
          <img className={styles.img} src="/img/logo.jpg" alt="header logo" />
        </a>
    </>
  )
}

export default Logo;