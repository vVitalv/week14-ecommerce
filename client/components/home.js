import React from 'react'
import Header from './header'
import Head from './head'
import Content from './content'

const Home = () => {
  return (
    <main className="flex flex-col bg-yellow-300">
      <Header title="Hello" />
      <Head />
      <Content />
    </main>
  )
}

Home.propTypes = {}

export default Home
