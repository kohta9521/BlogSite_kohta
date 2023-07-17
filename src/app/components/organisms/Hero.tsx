import React, { FC } from "react";

// css import
import styles from "./Hero.module.css";
import HeroTitle from "../atoms/HeroTitle";


const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <HeroTitle />
      </div>
    </div>
  )
}

export default Hero;