import React from 'react'

// scss
import styles from './styles/SidebarText.module.scss'

// props
export type SidebarTextProps = {
    id: number
    text: string
}

const SidebarText = ({
    id,
    text
}: SidebarTextProps) => {
    return (
        <p key={id} className={styles.listText}>
            {text}
        </p>
    )
}

export default SidebarText