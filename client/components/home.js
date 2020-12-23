import React from 'react'
import Header from './header'
import Head from './head'
import Content from './content'
import Footer from './footer'

const Home = () => {
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
