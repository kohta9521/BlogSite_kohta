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

// TODO: 画像の背景色を黒と白をpropsで仕分けできるようにするためそのロジックを作成する

const Logo = ({
    id,
    link,
    size = 'medium'
}: LogoProps) => {
    const imageSize = {
        small: {
            width: 200,
            height: 45
        },
        medium: {
            width: 300,
            height: 60
        },
        large: {
            width: 350,
            height: 70
        }
    }[size];

    return (
        <Link className={`${styles.logoLink} ${styles[size]}`} href={link} key={id}>
            <Image
                className={styles.logoImage}
                src="/images/blog_logo_blue.png"
                width={imageSize.width}
                height={imageSize.height}
                alt="logo"
            />
        </Link>
    )
}

export default Logo