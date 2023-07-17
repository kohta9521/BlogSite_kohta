import React, { FC } from "react";

// css import
import styles from "./HeroTitle.module.css";

// interface type
interface HeroProps {
  id: number;
  title: string;
  link: string;
  subTitle: string;
}


const HeroTitle: React.FC<HeroProps> = ({ id, title, link,  subTitle }) => {
  return (
    <div className={styles.heroTitleBox}>
      <a key={id} className={styles.title} href={link}>
        {title}
      </a>
      <a key={id} className={styles.subtitle} href={link}>
        {subTitle}
      </a>
    </div>
  )
}

export default HeroTitle;