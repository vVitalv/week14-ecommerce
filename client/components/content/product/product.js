import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Head from '../../hat/head'
import ProdHeader from './product-header'
import ProdDescription from './product-description'
import Footer from '../../foot/footer'

const Product = () => {
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
  const { id } = useParams()

  return (
    <div>
      <Head title="About product" />
      <ProdHeader />
      <ProdDescription title={id} />
      <Footer />
    </div>
  )
}

Product.propTypes = {}

export default React.memo(Product)
