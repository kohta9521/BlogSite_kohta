import React, { FC } from "react";

// css import
import styles from "./FooterList.module.css";

// interface type
interface FooterListProps {
  id: number;
  text: string;
  link: string;
  color?: 'white' | 'gray';
  size?: 'small' | 'medium' | 'large';
}


const FooterList: React.FC<FooterListProps> = ({ id, text, link, color = 'gray', size = 'medium' }) => {
  return (
    <>
      <a className={`${styles.listItem} ${styles[color]} ${styles[size]}`} key={id} href={link}>
        {text}
      </a>
    </>
  )
}

export default FooterList;