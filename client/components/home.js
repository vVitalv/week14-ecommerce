import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Head from './hat/head'
import Header from './hat/header'
import Content from './content/content'
import Footer from './foot/footer'
import { setLog } from '../redux/reducers/log'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setLog(`navigate to ${window.location.pathname}`))
    return () => {}
  }, [dispatch])

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
