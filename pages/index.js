import React from 'react'
import Head from 'next/head'
import Landing from '../components/Landing'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Landing />
  </div>
)

export default Home
