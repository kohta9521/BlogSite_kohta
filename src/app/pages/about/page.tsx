import React, {FC } from "react";

// css import
import styles from "./AboutPage.module.css";
import MainLayout from "@/app/components/templates/MainLayout";

const AboutPage: React.FC = () => {
  return (
    <>
      <MainLayout>
        <h1>About page!</h1>
      </MainLayout>
    </>
  )
}

export default AboutPage;