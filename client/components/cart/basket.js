import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import BasketHeader from './basket-header'
import Head from '../hat/head'
import BasketEmpty from './basket-empty'
import BasketStuff from './basket-full'
import Footer from '../foot/footer'
import { setLog } from '../../redux/reducers/log'

const Basket = () => {
  useEffect(() => {
    setLog()
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
