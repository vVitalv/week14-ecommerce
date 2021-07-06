import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

import BasketHeader from './cart/basket-header'
import Head from './head'
import BasketEmpty from './cart/basket-empty'
import BasketStuff from './cart/basket-full'
import Footer from './footer'

const Basket = () => {
  useEffect(() => {
    axios({
      method: 'post',
      url: '/api/v1/log',
      data: {
        time: new Date().toLocaleString(),
        action: `navigate to ${window.location.pathname}`
      }
    })
    return () => {}
  }, [])

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
  const headTitle = basket.amount === 0 ? 'Cart is Empty' : 'Cart'

  return (
    <div>
      <Head title={headTitle} />
      <BasketHeader amount={basket.amount} />
      {basket.amount === 0 ? <BasketEmpty /> : <BasketStuff />}
      <Footer />
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
