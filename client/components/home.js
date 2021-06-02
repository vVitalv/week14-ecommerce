import React, { useEffect } from 'react'
import axios from 'axios'

import Head from './head'
import Header from './header'
import Content from './content'
import Footer from './footer'

const Home = () => {
  useEffect(() => {
    axios({
      method: 'post',
      url: '/api/v1/log',
      data: {
        time: new Date().toLocaleString(),
        action: `navigate to ${window.location.pathname}`
      }
    })
    return () => {}
  }, [])
  return (
    <body className="bg-yellow-300 max-w-full">
      <Head title="Hello" />
      <Header />
      <Content />
      <Footer />
    </body>
  )
}

Home.propTypes = {}

export default Home
