import React from 'react'
import { useSelector } from 'react-redux'

import Header from './header'
import Head from './head'
import BasketTable from './basket-table'
import basketNeedEat from './src/basket-eat.gif'

const Basket = () => {
  const basket = useSelector((store) => store.basket.basketList)

  const amount = basket.reduce((acc, rec) => {
    return acc + rec.amount
  }, 0)

  if (amount === 0) {
    return (
      <div className="flex flex-col bg-yellow-300 h-screen">
        <Header title="Cart" />
        <Head />
        <div className="flex justify-center container pt-40">
          <img src={basketNeedEat} alt="basket is empty" className="rounded-full " />
        </div>
      </div>
    )
  }
  return (
    <div className="flex flex-col bg-yellow-300">
      <Header title="Cart" />
      <Head />
      <table className="table-auto mt-40">
        <thead>
          <tr>
            <th colSpan="3">Product</th>
            <th>Cost</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {basket.map((item) => {
            return <BasketTable data={item} key={`basket${item.id}`} />
          })}
          <tr>
            <td />
            <td />
            <td>{amount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
