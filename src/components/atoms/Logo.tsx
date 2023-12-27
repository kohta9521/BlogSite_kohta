import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// scss import
import styles from './styles/Logo.module.scss'

// props type
export type LogoProps = {
    id: number
    link: string
    size?: 'small' | 'medium' | 'large'
}

const Logo = ({
    id,
    link,
    size = 'medium'
}: LogoProps) => {
    return (
        <Link className={`${styles.logoLink} ${styles[size]}`} href={link} key={id}>
            <Image
                className={styles.logoImage}
                src=""
                width={140}
                height={60}
                alt="logo"
            />
        </Link>
    )
}

export default Logo