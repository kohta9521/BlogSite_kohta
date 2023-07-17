import Logo from "../atoms/Logo";
import React, { FC } from "react";

// css import
import styles from "./Header.module.css";
import ListArea from "../molecules/ListArea";


const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Logo size="large" link="/" />
      <ListArea />
    </div>
  )
}

export default Header;