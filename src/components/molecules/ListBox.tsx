import React from 'react'

// scss
import styles from './styles/ListBox.module.scss'

// componets
import List from '../atoms/List'
import BoxButton from '../atoms/BoxButton'

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
                text='Kohta Tech Blogとは'
                link='/about'
                size='medium'
                color='black'
            />
            <List
                id={1}
                text='記事一覧'
                link='/posts'
                size='medium'
                color='black'
            />
            <List
                id={1}
                text='ジャンル一覧'
                link='/genre'
                size='medium'
                color='black'
            />
            <BoxButton
                id={1}
                text='会員登録'
                size='medium'
                color='blue'
                link='/login'
            />
        </div>
    )
}

export default ListBox