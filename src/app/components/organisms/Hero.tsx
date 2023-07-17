import React, { FC } from "react";

// css import
import styles from "./Hero.module.css";
import HeroTitle from "../atoms/HeroTitle";


const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <HeroTitle id={1} title="Next.jsにおけるcssのベストプラクティス" subTitle="cssの選定と理由" link="/pages/blog" />
      </div>
    </div>
  )
}

export default Hero;