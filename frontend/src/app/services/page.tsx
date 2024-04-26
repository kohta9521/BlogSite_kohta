import React from 'react'

// scss
import styles from './Services.module.scss'

// components
import SubPageLayout from '@/components/templates/SubPageLayout'

const Services = () => {
  return (
    <SubPageLayout
      id={1}
      enTitle='SERVICES'
      jaTitle='# サービス'
      desc='HubSpotの導入・運用支援、デジタルマーケティング、Webサイト構築を軸とするサービスをご提供しています。お客さまとの丁寧な対話を重ねて、事業推進に貢献します。'
    >
      <h1 className={styles.title}>service page</h1>
    </SubPageLayout>
  )
}

export default Services
