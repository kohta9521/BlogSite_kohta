import React, { FC } from "react";

// css import
import styles from "./blogPage.module.css";
import Bloglayout from "@/app/components/templates/BlogLayout";


const BlogPage: React.FC = () => {
  return (
    <>
        <Bloglayout>
          <h1>sample code</h1>
        </Bloglayout>
    </>
  )
}

export default BlogPage;

// /pages/blogのリンク