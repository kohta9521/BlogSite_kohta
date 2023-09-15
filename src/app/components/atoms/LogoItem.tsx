import React, { FC } from 'react'

// css import
import styles from './styles/LogoItem.module.css'
import { Divider } from '@chakra-ui/react'

// ロゴのサイズ指定用Props
type Props = {
  id: number
  size?: 'small' | 'medium' | 'large'
}

const Logo: React.FC<Props> = ({ id, size = 'medium' }) => {
  return (
    <div className={`styles.logo ${styles[size]}`} key={id}>
      <a href="/">
        <img className={styles.img} src="/img/logo.png" alt="site logo img" />
      </a>
    </div>
  )
}

export default Logo
