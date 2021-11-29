import React from 'react'
import { useSelector } from 'react-redux'

import Card from './content-card'
import Pagination from './pagination'

const Content = () => {
  const contentList = useSelector((store) => store.cardData.goodsList)
  const cardsOnPage = useSelector((store) => store.cardData.cardsOnPage)
  //  const dispatch = useDispatch()

  return (
    <main>
      <div className="content">
        {contentList
          .map((product) => {
            return <Card productData={product} key={product.id} />
          })
          .slice(0, cardsOnPage)}
      </div>
      <Pagination />
    </main>
  )
}

Content.propTypes = {}

export default React.memo(Content)
