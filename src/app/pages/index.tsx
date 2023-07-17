import React, {FC } from "react";
import Header from "../components/organisms/Header";
import MainLayout from "../components/templates/MainLayout";
import Hero from "../components/organisms/Hero";

const HomePage: React.FC = () => {
  return (
    <div>
      <MainLayout>
        <Hero />
      </MainLayout>
    </div>
  )
}

export default HomePage;