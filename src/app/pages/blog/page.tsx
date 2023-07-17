import React, { FC } from "react";

// css import
import styles from "./BlogPage.module.css";
import MainLayout from "@/app/components/templates/MainLayout";


const BlogPage: React.FC = () => {
  return (
    <>
      <MainLayout>
        <h1>Blog page!</h1>
      </MainLayout>
    </>
  )
}

export default BlogPage;