import React from 'react'
import Link from 'next/link'

// scss
import styles from './styles/List.module.scss'

// type
export type ListProps = {
    id: number
    link: string
    text: string
    size?: 'small' | 'medium' | 'large'
    color?: 'blue' | 'white' | 'black'
}

const List = ({
    id,
    link,
    text,
    size = 'medium',
    color = 'blue'
}: ListProps ) => {
    return (
        <Link
            key={id}
            href={link}
            className={`${styles.list} ${styles[size]} ${styles[color]}`}
        >
            {text}
        </Link>
    )
}

export default List