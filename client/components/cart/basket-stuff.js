import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { useSelector } from 'react-redux'

import BasketTable from './basket-table'
import BuyBtnPortal from './basket-portal-buybtn'

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
        <tfoot className="basket-table-tfoot">
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
        <tbody className="basket-table-tbody">
          {basketList.map((product) => {
            return <BasketTable productData={product} key={`basket${product.id}`} />
          })}
        </tbody>
      </table>
      <button type="button" className="basket-buy-button" onClick={() => setPortalOpen(true)}>
        Buy
      </button>
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
