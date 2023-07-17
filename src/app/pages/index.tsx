import React, {FC } from "react";
import Header from "../components/organisms/Header";
import MainLayout from "../components/templates/MainLayout";

const HomePage: React.FC = () => {
  return (
    <div>
      <MainLayout>
        <h1>Home page!</h1>
      </MainLayout>
    </div>
  )
}

export default HomePage;