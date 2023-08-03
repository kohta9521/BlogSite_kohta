import React, { FC } from "react";

// css import
import styles from "./styles/Mainlayout.module.css";


const MainLayout: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        main
      </div>
    </div>
  )
}

export default MainLayout;