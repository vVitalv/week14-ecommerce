import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

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

  return <div className="login">product {id}</div>
}

Product.propTypes = {}

export default React.memo(Product)
