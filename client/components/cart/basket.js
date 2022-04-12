import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Header from '../hat/header'
import Head from '../hat/head'
import BasketStuff from './basket-stuff'
import CartHeaderThead from './basket-header-thead'
import Footer from '../foot/footer'
import { setLog } from '../../redux/reducers/log'

const Basket = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setLog(`navigated to ${window.location.pathname}`))
    return () => {}
  }, [dispatch])
  const underHeader = () => <CartHeaderThead />

  return (
    <div>
      <Head title="Cart" />
      <Header UH={underHeader} />
      <BasketStuff />
      <Footer />
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
