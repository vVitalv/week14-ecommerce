import React from 'react'
import Header from './header'
import Head from './head'

const Basket = () => {
  return (
    <div>
      <Header title="Hello" />
      <Head />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
          This is BASKET component
        </div>
      </div>
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
