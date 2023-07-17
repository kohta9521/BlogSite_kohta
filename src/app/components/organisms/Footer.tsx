import React, { FC } from "react";

// css import
import styles from "./Footer.module.css";
import Logo from "../atoms/Logo";
import FooterList from "../atoms/FooterList";


const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topBox}>
          <div className={styles.box}>
            <FooterList id={1} text="About" link="/pages/about" color="white" size="medium" />
            <FooterList id={2} text="このサイトについて" link="/pages/about" color="gray" size="small" />
            <FooterList id={3} text="私について" link="/pages/about" color="gray" size="small" />
            <FooterList id={4} text="サイトの内容について" link="/pages/about" color="gray" size="small" />
          </div>
          <div className={styles.box}>
            <FooterList id={5} text="Blog" link="/pages/blog" color="white" size="medium" />
            <FooterList id={6} text="HTML/CSS/SASS" link="/pages/blog" color="gray" size="small" />
            <FooterList id={7} text="JavaScript/TypeScript" link="/pages/blog" color="gray" size="small" />
            <FooterList id={8} text="React/Nextjs" link="/pages/blog" color="gray" size="small" />
            <FooterList id={9} text="Go" link="/pages/blog" color="gray" size="small" />
          </div>
          <div className={styles.box}>
            <FooterList id={10} text="Work" link="/pages/work" color="white" size="medium" />
            <FooterList id={11} text="仕事について" link="/pages/work" color="gray" size="small" />
            <FooterList id={12} text="これからについて" link="/pages/work" color="gray" size="small" />
            <FooterList id={13} text="フリーランス" link="/pages/work" color="gray" size="small" />
          </div>
          <div className={styles.box}>
            <FooterList id={14} text="Contact" link="/pages/contact" color="white" size="medium" />
            <FooterList id={15} text="お問合せ" link="/pages/contact" color="gray" size="small" />
            <FooterList id={16} text="プライバシーポリシー" link="/pages/contact" color="gray" size="small" />
          </div>
        </div>
        <div className={styles.bottomBox}>
          <Logo link="/" size="large" />
        </div>
      </div>
    </div>
  )
}

export default Footer;