import React, { useEffect } from 'react'
import axios from 'axios'

import Head from './head'
import Header from './hat/header'
import Content from './content/content'
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
    <div>
      <Head title="Hello" />
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

Home.propTypes = {}

export default Home
