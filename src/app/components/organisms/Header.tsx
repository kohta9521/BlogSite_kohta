import React, { FC, useState } from "react";

// css import
import styles from "./styles/Header.module.css";
import ToggleButton from "../atoms/ToggleButton";
import Navigation from "../atoms/Navigation";


const Header: React.FC = () => {

  const [ open, setOpen ] = useState(false);
  const toggleFunction = () => {
    setOpen((prevState) => !prevState);
  }

  return (
    <div className={styles.header}>
      <ToggleButton
        open={open}
        controls="navigation"
        label="メニューを開きます"
        onClick={toggleFunction}
      />
      <Navigation id="navigation" open={open} />
    </div>
  )
}

export default Header;