import React from 'react'

// scss
import styles from './styles/Sidebar.module.scss'
import SidebarSection from './SidebarSection'

// components

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SidebarSection jaTitle='最新情報' enTitle='LATEST INFO'>
        <p>sample</p>
      </SidebarSection>
    </div>
  )
}

export default Sidebar
