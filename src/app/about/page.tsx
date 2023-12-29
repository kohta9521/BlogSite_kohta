import React from 'react'
import Image from 'next/image'

// scss
import styles from './About.module.scss'

// components
import BasicLayout from '@/components/templates/BasicLayout'


const About = () => {
    return (
        <>
            <BasicLayout>
                <div className={styles.about}>
                    <h1 className={styles.topText}>
                        About<br />
                        <span className={styles.accentFont}>This Blog Site</span>
                    </h1>
                    <div className={styles.hero}>
                        <Image
                            className={styles.heroImage}
                            src={"/images/aboutHero.jpg"}
                            alt='hero'
                            width={2000}
                            height={1300}
                        />
                    </div>
                </div>
            </BasicLayout>
        </>
    )
}

export default About