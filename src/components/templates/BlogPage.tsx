import React from 'react'


// scss
import styles from './styles/BlogPage.module.scss'

// components
import LeftSidebar from '../organisms/LeftSidebar'
import Main from '../organisms/Main'
import RightSidebar from '../organisms/RightSidebar'


const BlogPage = () => {
    return (
        <div className={styles.blogPage}>
            <div className={styles.container}>
                <LeftSidebar />
                <Main />
                <RightSidebar />
            </div>
        </div>
    )
}

export default BlogPage