import React from 'react'

// scss
// import styles from './Request.module.scss'

// components
import SubPageLayout from '@/components/templates/SubPageLayout'
import SubPageSecTitle from '@/components/atoms/SubPageSecTitle'
import SubPageTitle from '@/components/atoms/SubPageTitle'

const Request = () => {
  return (
    <SubPageLayout
      id={1}
      enTitle='About'
      jaTitle='# このサイトについて'
      desc='このサイトは、Next.jsで作成したサンプルサイトです。'
    >
      <SubPageSecTitle id={1} title='What is this site?' />
      <SubPageTitle id={1} enTitle='About' jaTitle='このサイトについて' />
    </SubPageLayout>
  )
}

export default Request
