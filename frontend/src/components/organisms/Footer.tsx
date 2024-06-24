import React from 'react'

// scss
import styles from './styles/Footer.module.scss'

// components
import Logo from '../atoms/Logo'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <Logo id={2} link='/' size='medium' />
        </div>
        {/* <div className={styles.rightBox}>
          <div className={styles.menuBox}>
            <FooterMenuMain id={1} link='/' text='Home' />
            <FooterMenuSub id={1} link='/blog' text='おすすめ記事' />
            <FooterMenuSub id={1} link='/blog' text='最新記事一覧' />
            <FooterMenuSub id={1} link='/blog' text='最新情報' />
            <FooterMenuSub id={1} link='/blog' text='カテゴリー' />
            <FooterMenuSub id={1} link='/blog' text='アーカイブ' />
          </div>
          <div className={styles.menuBox}>
            <FooterMenuMain id={2} link='/about' text='About' />
          </div>
          <div className={styles.menuBox}>
            <FooterMenuMain id={3} link='/request' text='Request' />
          </div>
          <div className={styles.menuBox}>
            <FooterMenuMain id={4} link='/services' text='Services' />
          </div>
          <div className={styles.menuBox}>
            <FooterMenuMain id={5} link='/contact' text='Contact' />
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Footer
