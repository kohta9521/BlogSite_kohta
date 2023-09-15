import React, { FC } from 'react'

// css import
import styles from './styles/Navigation.module.css'

type Props = {
  open: boolean
  id: string
}

const Navigation: React.FC<Props> = ({ open, id }) => {
  return (
    <nav id={id} aria-hidden={!open} className={styles.navigation}>
      <ul>
        <li>about</li>
        <li>about</li>
        <li>about</li>
      </ul>
    </nav>
  )
}

export default Navigation
