import React from 'react'
import { useSelector } from 'react-redux'

import Card from './content-card'

const Content = () => {
  const contentList = useSelector((store) => store.cardData.goodsList.slice(0, 10))

  return (
    <main>
      <div className="content">
        {contentList.map((product) => {
          return <Card data={product} key={product.id} />
        })}
      </div>
    </main>
  )
}

Content.propTypes = {}

export default React.memo(Content)
