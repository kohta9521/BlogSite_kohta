import React, { FC } from "react";

// css import
import styles from "./styles/Mainlayout.module.css";
import Header from "../organisms/Header";


const MainLayout: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Header />
      </div>
    </div>
  )
}

export default MainLayout;