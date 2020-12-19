import React from 'react'
import { useSelector } from 'react-redux'

import Header from './header'
import Head from './head'
import BasketTable from './basket-table'

const Basket = () => {
  const basketList = useSelector((store) =>
    store.cardData.goodsList.filter((product) => {
      return product.amount > 0
    })
  )
  return (
    <div className="flex flex-col bg-yellow-300 h-screen">
      <Header title="Cart" />
      <Head />
      <table className="table-auto mt-40">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Cost</th>
            <th>Price</th>
            <th>Tuning</th>
          </tr>
        </thead>
        <tbody>
          {basketList.map((item) => {
            return <BasketTable data={item} key={item.id} />
          })}
        </tbody>
      </table>
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
