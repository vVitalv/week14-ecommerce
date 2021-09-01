import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Head from '../../hat/head'
import ProdHeader from './product-header'
import ProdDescription from './product-description'
import Footer from '../../foot/footer'
import { setLog } from '../../../redux/reducers/log'

const Product = () => {
  useEffect(() => {
    setLog()
    return () => {}
  }, [])
  const { id } = useParams()

  return (
    <div>
      <Head title="About product" />
      <ProdHeader />
      <ProdDescription id={id} />
      <Footer />
    </div>
  )
}

Product.propTypes = {}

export default React.memo(Product)
