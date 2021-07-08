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
  const summaryCost = (basket.price * rate[currency]).toFixed(2)

  return (
    <main>
      <table className="basket-table">
        <tfoot>
          <td />
          <td />
          <td />
          <td>{basket.amount}</td>
          <td>
            {summaryCost} {currency}
          </td>
        </tfoot>
        <tbody>
          {basketList.map((product) => {
            return <BasketTable productData={product} key={`basket${product.id}`} />
          })}
        </tbody>
      </table>
      <button type="button" id="buy-button" className="buy-btn">
        Buy
      </button>
    </main>
  )
}

BasketStuff.propTypes = {}

export default React.memo(BasketStuff)
