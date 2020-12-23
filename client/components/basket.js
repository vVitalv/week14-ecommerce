import React from 'react'
import { useSelector } from 'react-redux'

import Header from './header'
import Head from './head'
import BasketTable from './basket-table'
import basketNeedEat from './src/basket-eat.gif'

const Basket = () => {
  const rate = useSelector((store) => store.currency.rates)
  const currency = useSelector((store) => store.currency.currency)
  const basketList = useSelector((store) => store.basket.basketList)
  const basket = basketList.reduce(
    (acc, rec) => {
      return {
        ...acc,
        amount: acc.amount + rec.amount,
        price: acc.price + rec.price * rec.amount
      }
    },
    { amount: 0, price: 0 }
  )

  if (basket.amount === 0) {
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
      <table className="table-auto mt-40 text-gray-700 fond-bold border-collapse border-gray-300">
        <thead className="bg-yellow-500 text-lg">
          <tr>
            <th className="opacity-0">Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Total price</th>
          </tr>
        </thead>
        <tbody className="text-center font-semibold">
          {basketList.map((item) => {
            return <BasketTable data={item} key={`basket${item.id}`} />
          })}
          <tr className="font-bold border-white">
            <td />
            <td />
            <td />
            <td>{basket.amount}</td>
            <td>
              {(basket.price * rate[currency]).toFixed(2)} {currency}
            </td>
          </tr>
        </tbody>
      </table>
      <button
        type="button"
        id="buy-button"
        className="text-3xl font-bold self-end w-40 h-20 bg-indigo-700 rounded-xl focus:outline-none mr-8 mt-8"
      >
        Buy
      </button>
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
