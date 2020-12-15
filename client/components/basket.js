import React from 'react'
import Header from './header'
import Head from './head'

const Basket = () => {
  return (
    <div className="flex flex-col bg-yellow-300">
      <Header title="Cart" />
      <Head />
      <div className="flex flex-row justify-items-center justify-center divide-x-2 divide-gray-500 text-gray-700 text-xl font-bold pt-40">
        <div className="px-4">Position</div>
        <div className="px-56">Name</div>
        <div className="px-4">Amount</div>
        <div className="px-4">Cost</div>
        <div className="px-4">Price</div>
      </div>
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
