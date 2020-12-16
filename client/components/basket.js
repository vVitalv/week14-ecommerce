import React from 'react'
import Header from './header'
import Head from './head'
import BasketTable from './basket-table'

const Basket = () => {
  return (
    <div className="flex flex-col bg-yellow-300 h-screen">
      <Header title="Cart" />
      <Head />
      <BasketTable />
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
