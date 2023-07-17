import Logo from "../atoms/Logo";
import React, { FC } from "react";

// css import
import styles from "./Header.module.css";


const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Logo size="medium" link="/" />
    </div>
  )
}

export default Header;