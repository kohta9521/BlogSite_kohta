import React from 'react'

// scss
import styles from './styles/Contact.module.scss'

// components
import ContactCard from '../molecules/ContactCard'

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <ContactCard
          id={1}
          jaTitle='# 創作依頼・ご相談'
          enTitle='REQUEST'
          desc='新しいサイト制作や、既存サイトの運用に関するお困りごとなどございましたらご依頼、ご相談ください。'
          link='/contact'
        />
        <ContactCard
          id={1}
          jaTitle='# サービス紹介'
          enTitle='SERVICES'
          desc='私kohtaの運営しているサービス・そして提供しているサービスをご紹介いたします。'
          link='/services'
        />
      </div>
    </div>
  )
}

export default Contact
