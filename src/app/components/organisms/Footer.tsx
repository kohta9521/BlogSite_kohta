import React, { FC } from "react";

// css import
import sytles from "./styles/Footer.module.css";
import Logo from "../atoms/LogoItem";


const Footer: React.FC = () => {
  return (
    <div className={sytles.footer}>
      <div className={sytles.container}>
        <Logo id={2} size="small" />
        <div className={sytles.menu}>
          <ul>
            <li className={sytles.menuList}><a href="/">Home</a></li>
            <li className={sytles.menuList}><a href="">カテゴリー一覧</a></li>
            <li className={sytles.menuList}><a href="">日付一覧</a></li>
            <li className={sytles.menuList}><a href="">このブログサイトについて</a></li>
            <li className={sytles.menuList}><a href="">ポートフォリオサイト</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;