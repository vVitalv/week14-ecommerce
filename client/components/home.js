import React, { useEffect } from 'react'
import axios from 'axios'

import Header from './header'
import Head from './head'
import Content from './content'
import Footer from './footer'

const Home = () => {
  useEffect(() => {
    axios({
      method: 'post',
      url: '/api/v1/log',
      data: {
        time: +new Date(),
        action: `navigate to ${window.location.pathname}`
      }
    })
    return () => {}
  }, [])
  return (
    <main className="flex flex-col bg-yellow-300 w-screen">
      <Header title="Hello" />
      <Head />
      <Content />
      <Footer />
    </main>
  )
}

Home.propTypes = {}

export default Home
