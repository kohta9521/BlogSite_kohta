import React, {FC } from "react";
import Header from "../components/organisms/Header";
import MainLayout from "../components/templates/MainLayout";
import Hero from "../components/organisms/Hero";
import Title from "../components/atoms/Title";
import NewBlogSection from "../components/organisms/NewBlogSection";

const HomePage: React.FC = () => {
  return (
    <div>
      <MainLayout>
        <Hero />
        <NewBlogSection />
      </MainLayout>
    </div>
  )
}

export default HomePage;