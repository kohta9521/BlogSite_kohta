import React, { FC } from "react";

// css import
import styles from "./Footer.module.css";
import Logo from "../atoms/Logo";


const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topBox}>

        </div>
        <div className={styles.bottomBox}>
          <Logo link="/" size="large" />
        </div>
      </div>
    </div>
  )
}

export default Footer;