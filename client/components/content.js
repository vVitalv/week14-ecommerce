import React from 'react'
import { useSelector } from 'react-redux'

import Card from './card'

const Content = () => {
  const contentList = useSelector((store) => store.cardData.goodsList.slice(0, 10))

  return (
    <main>
      <div className="content">
        {contentList.map((item) => {
          return <Card data={item} key={item.id} />
        })}
      </div>
    </main>
  )
}

Content.propTypes = {}

export default React.memo(Content)
