import React from 'react';
import { Layout } from '../components';
import '../styles/globals.css'
import '../styles/globals.scss'
import '../styles/navbar.css'
import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>

  )
}

export default MyApp