import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { useSelector } from 'react-redux'

import BasketTable from './basket-table'
import BuyBtnPortal from './basket-portal-buybtn'
import Button from '../btns/btn'

const BasketStuff = () => {
  const [isPortalOpen, setPortalOpen] = useState(false)
  const { rates, currency } = useSelector((store) => store.currency)
  const { basketList } = useSelector((store) => store.basket)
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
  const summaryCost = (basket.price * rates[currency]).toFixed(2)

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
        onClickFunction={() => setPortalOpen(true)}
      />
      {isPortalOpen &&
        createPortal(
          <BuyBtnPortal
            summaryCost={summaryCost}
            currency={currency}
            setPortalOpen={setPortalOpen}
          />,
          document.body
        )}
    </main>
  )
}

BasketStuff.propTypes = {}

export default React.memo(BasketStuff)
