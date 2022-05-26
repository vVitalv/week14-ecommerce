import React from 'react'
import { useSelector } from 'react-redux'

import Card from './content-card'
import Pagination from './pagination'

const Content = () => {
  const { productList } = useSelector((store) => store.cardData)

  return (
    <main>
      <div className="content">
        <div className="content-scroll">
          {productList.map((product, index) => {
            return <Card productData={product} productIndex={index} key={product.id} />
          })}
          <Pagination />
        </div>
      </div>
    </main>
  )
}

Content.propTypes = {}

export default React.memo(Content)
