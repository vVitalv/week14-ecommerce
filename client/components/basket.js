import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

import Header from './header'
import Head from './head'
import BasketEmpty from './basket-empty'
import BasketStuff from './basket-full'
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

  if (basket.amount === 0) {
    return (
      <body>
        <Header title="Cart is Empty" />
        <Head />
        <BasketEmpty />
        <Footer />
      </body>
    )
  }
  return (
    <body>
      <Header title="Cart" />
      <Head />
      <BasketStuff />
      <Footer />
    </body>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
