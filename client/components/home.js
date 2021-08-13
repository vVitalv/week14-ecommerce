import React, { useEffect } from 'react'

import Head from './hat/head'
import Header from './hat/header'
import Content from './content/content'
import Footer from './foot/footer'
import { setLog } from '../redux/reducers/log'

const Home = () => {
  useEffect(() => {
    setLog()
    return () => {}
  }, [])

  return (
    <div className="body-section">
      <Head title="Hello" />
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

Home.propTypes = {}

export default Home
