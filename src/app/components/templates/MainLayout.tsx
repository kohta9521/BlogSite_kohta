import React, { FC } from "react";

// css import
import styles from "./MainLayout.module.css";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

// interface type
interface MainLayoutProps {
  children: React.ReactNode;
}


const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
        <main className={styles.mainLayoutContent}>
          { children }
        </main>
      <Footer />
    </>
  )
}

export default MainLayout;