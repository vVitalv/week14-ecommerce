import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import BasketHeader from './basket-header'
import Head from '../hat/head'
import BasketStuff from './basket-stuff'
import Footer from '../foot/footer'
import { setLog } from '../../redux/reducers/log'

const Basket = () => {
  useEffect(() => {
    setLog(`navigate to ${window.location.pathname}`)
    return () => {}
  })

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
    <div>
      <Head title="Cart" />
      <BasketHeader amount={basket.amount} />
      <BasketStuff />
      <Footer />
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
