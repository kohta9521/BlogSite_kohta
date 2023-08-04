'use client';
import React, { FC } from "react";

// css import
import styles from "./styles/Mainlayout.module.css";
import Header from "../organisms/Header";
import MainContent from "../organisms/MainContent";


const MainLayout: React.FC = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <MainContent />
      </div>
    </div>
  )
}

export default MainLayout;