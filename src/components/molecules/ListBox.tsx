import React from 'react'

// scss
import styles from './styles/ListBox.module.scss'

// componets
import List from '../atoms/List'

const ListBox = () => {
    return (
        <div className={styles.listBox}>
            <List
                id={1}
                text='ホーム'
                link='/'
                size='medium'
                color='black'
            />
            <List
                id={1}
                text='Kohta Blogとは'
                link='/'
                size='medium'
                color='black'
            />
            <List
                id={1}
                text='記事一覧'
                link='/'
                size='medium'
                color='black'
            />
            <List
                id={1}
                text='ジャンル一覧'
                link='/'
                size='medium'
                color='black'
            />
        </div>
    )
}

export default ListBox