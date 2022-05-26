import React, { useEffect } from 'react'
import Div100vh from 'react-div-100vh'
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
    <Div100vh>
      <Head title="Cart" />
      <div className="viewport">
        <Header UH={underHeader} />
        <BasketStuff />
        <Footer />
      </div>
    </Div100vh>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
