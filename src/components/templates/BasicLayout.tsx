import React from 'react'

// scss
import styles from './styles/BasicLayout.module.scss'


// props
interface BasicLayoutProps {
    children: React.ReactNode
}

// components
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

const BasicLayout = ({
    children
}: BasicLayoutProps) => {
    return (
        <>
            <Header />
                <div className={styles.container}>
                    {children}
                </div>
            <Footer />
        </>
    )
}

export default BasicLayout