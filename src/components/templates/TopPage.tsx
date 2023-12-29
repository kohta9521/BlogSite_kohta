import React from 'react'

// scss
import styles from './styles/TopPage.module.scss'

// type
export type TopPageProps = {
    children: React.ReactNode
}

// components


const TopPage = ({
    children
}: TopPageProps) => {
    return (
        <div className={styles.main}>
            {children}
        </div>
    )
}

export default TopPage