import React, { FC } from "react";

// css import
import styles from "./MenuList.module.css";

// interface type
interface listProps  {
  id: number,
  text: string,
  link: string,
  // color?: string,
  size?: 'small' | 'medium' | 'large',
  addStyle?: string,
}



const MenuList: React.FC<listProps> = ({ id, text, link, size = 'medium', addStyle = ' ' }) => {

  const css: string | undefined = addStyle;

  return (
      <a  className={`${styles.listItem} ${styles[size]} ${styles[css]}`} key={id} href={link}>
      {text}
      </a>
  )
}

export default MenuList;