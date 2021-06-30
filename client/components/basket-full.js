import React from 'react'
import { useSelector } from 'react-redux'

import BasketTable from './basket-table'

const BasketStuff = () => {
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

  return (
    <main>
      <table className="basket-table">
        <tbody className="text-center font-semibold">
          {basketList.map((item) => {
            return <BasketTable data={item} key={`basket${item.id}`} />
          })}
          <tr className="font-bold text-lg bg-yellow-400">
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
        className="text-3xl font-bold self-end w-40 h-20 bg-indigo-700 rounded-xl focus:outline-none m-8"
      >
        Buy
      </button>
    </main>
  )
}

BasketStuff.propTypes = {}

export default React.memo(BasketStuff)
