import React, { FC } from "react";

// css import
import styles from "./HeroTitle.module.css";

// interface type
interface HeroProps {
  id: number;
  title: string;
  subTitle: string;
}


const HeroTitle: React.FC = () => {
  return (
    <div className={styles.heroTitleBox}>
      hero title
    </div>
  )
}

export default HeroTitle;