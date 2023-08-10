import React, { FC } from "react";

// css import
import styles from "./blogPage.module.css";
import Bloglayout from "@/app/components/templates/BlogLayout";


const BlogPage: React.FC = () => {
  return (
    <>
        <Bloglayout>
          <img  className={styles.topImg} src="/img/sampleImg.png" alt="blog top img" />
          <h1 className={styles.title}>
              TypeScriptでReact Hook Formのフォーム作成の基礎を学ぶ
          </h1>
        </Bloglayout>
    </>
  )
}

export default BlogPage;