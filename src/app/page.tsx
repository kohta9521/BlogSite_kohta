import React from 'react';

// components
import Header from '@/components/organisms/Header';
import BlogPage from '@/components/templates/BlogPage';
import TopPage from '@/components/templates/TopPage';
import BasicLayout from '@/components/templates/BasicLayout';


export default function Home() {

  return (
    <>
      <BasicLayout>
        <TopPage>
          <h1>hello</h1>
        </TopPage>
      </BasicLayout>

    </>
  )
}
