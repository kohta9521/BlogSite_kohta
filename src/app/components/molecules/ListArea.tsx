import React, { FC } from "react";

// css import
import styles from "./ListArea.module.css";
import MenuList from "../atoms/MenuList";


const ListArea: React.FC = () => {
  return (
    <div className={styles.listArea}>
      <MenuList id={1} text="Home" link="/" size="medium"  />
      <MenuList id={2} text="About" link="/pages/about" size="medium"  />
      <MenuList id={3} text="Blog" link="/pages/blog" size="medium"  />
      <MenuList id={4} text="Work" link="/pages/work" size="medium"  />
      <MenuList id={5} text="Contact" link="/pages/contact" size="medium" addStyle="contactButton"  />
    </div>
  )
}

export default ListArea;