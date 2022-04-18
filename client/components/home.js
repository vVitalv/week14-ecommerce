import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Head from './hat/head'
import Header from './hat/header'
import UnderHeader from './hat/underhead/under-header'
import Content from './content/content'
import Footer from './foot/footer'
import { setLog } from '../redux/reducers/log'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setLog(`navigated to ${window.location.pathname}`))
    return () => {}
  }, [dispatch])
  const underHeader = () => <UnderHeader />

  return (
    <div className="body-section">
      <Head title="Hello" />
      <Header UH={underHeader} />
      <Content />
      <Footer />
    </div>
  )
}

Home.propTypes = {}

export default Home
