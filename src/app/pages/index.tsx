import React, {FC } from "react";
import Header from "../components/organisms/Header";
import MainLayout from "../components/templates/MainLayout";
import Hero from "../components/organisms/Hero";
import Title from "../components/atoms/Title";

const HomePage: React.FC = () => {
  return (
    <div>
      <MainLayout>
        <Hero />
        <Title id={1} text="最新記事" link="#blog" size="medium" />
      </MainLayout>
    </div>
  )
}

export default HomePage;