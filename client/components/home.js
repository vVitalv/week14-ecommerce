import React, { useEffect } from 'react'
import Div100vh from 'react-div-100vh'
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
    setTimeout(() => {
      dispatch(setLog(`navigated to ${window.location.pathname}`))
    }, 3000)
    return () => {}
  }, [dispatch])
  const underHeader = () => <UnderHeader />

  return (
    <Div100vh>
      <Head title="Hello" />
      <div className="viewport">
        <Header UH={underHeader} />
        <Content />
        <Footer />
      </div>
    </Div100vh>
  )
}

export default Home
