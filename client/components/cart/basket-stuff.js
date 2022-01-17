import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import BasketTable from './basket-table'
import Button from '../btns/btn'
import { purgeCart } from '../../redux/reducers/basket'

const BasketStuff = () => {
  const dispatch = useDispatch()
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
  const popUpOnClick = () => {
    alert(
      `Bless you for you donation ${summaryCost} ${currency} to the Akhmad Kadyrov Democracy Fund!`
    )
    return dispatch(purgeCart)
  }

  return (
    <main>
      <table className="basket-table">
        <tfoot>
          <tr>
            <td />
            <td />
            <td />
            <td>{basket.amount}</td>
            <td>
              {summaryCost} {currency}
            </td>
          </tr>
        </tfoot>
        <tbody>
          {basketList.map((product) => {
            return <BasketTable productData={product} key={`basket${product.id}`} />
          })}
        </tbody>
      </table>
      <Button
        operation="buy"
        className="buy-btn"
        sign="Buy"
        data=""
        onClickFunction={popUpOnClick}
      />
    </main>
  )
}

BasketStuff.propTypes = {}

export default React.memo(BasketStuff)
