import React from 'react'
import Header from './header'
import Head from './head'
// import wave from '../assets/images/wave.jpg'

const Home = () => {
  return (
    <div>
      <Header title="Hello" />
      <Head />
      <button type="button">updateCountert</button>
      <div> Hello World Dashboardthghg </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
