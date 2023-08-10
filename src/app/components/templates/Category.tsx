import React, { FC} from "react";

// css import
import styles from "./styles/Category.module.css";
import Header from "../organisms/Header";


const Category: React.FC = () => {
  return (
    <div className={styles.category}>
      <Header />
        <div className={styles.container}>

        </div>
    </div>
  )
}

export default Category;