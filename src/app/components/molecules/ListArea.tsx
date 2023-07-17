import React, { FC } from "react";

// css import
import styles from "./ListArea.module.css";
import MenuList from "../atoms/MenuList";


const ListArea: React.FC = () => {
  return (
    <div className={styles.listArea}>
      <MenuList id={1} text="Home" link="/" size="medium"  />
      <MenuList id={2} text="Blog" link="/pages/blog" size="medium"  />
    </div>
  )
}

export default ListArea;