import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import BasketTable from './basket-table'
import Button from '../btns/btn'
import { purgeCart } from '../../redux/reducers/basket'

const BasketStuff = () => {
  const history = useHistory()
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
    const backingElem = document.createElement('div')
    backingElem.className = 'backing'
    document.body.appendChild(backingElem)

    const buyPopupElem = document.createElement('div')
    buyPopupElem.className = 'buy-popup'
    buyPopupElem.innerText = `Bless you for your donation ${summaryCost} ${currency} to the Ramzan Kadyrov Forgiveness Fund!`
    backingElem.appendChild(buyPopupElem)

    const confirmBtnElem = document.createElement('button')
    const removeBacking = () => {
      history.push(`/`)
      backingElem.remove()
    }
    confirmBtnElem.className = 'confirm-btn'
    confirmBtnElem.innerText = 'Sorry!'
    buyPopupElem.appendChild(confirmBtnElem)
    confirmBtnElem.addEventListener('click', removeBacking)

    return dispatch(purgeCart())
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
