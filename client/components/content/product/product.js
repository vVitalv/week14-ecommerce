import React, { useEffect } from 'react'
import Div100vh from 'react-div-100vh'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Head from '../../hat/head'
import Header from '../../hat/header'
import ProdDescription from './product-description'
import Footer from '../../foot/footer'
import { setLog } from '../../../redux/reducers/log'

const Product = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setLog(`navigated to ${window.location.pathname}`))
    return () => {}
  }, [dispatch])
  const { id } = useParams()

  return (
    <Div100vh>
      <Head title="About product" />
      <div className="viewport">
        <Header />
        <ProdDescription id={id} />
        <Footer />
      </div>
    </Div100vh>
  )
}

export default Product
