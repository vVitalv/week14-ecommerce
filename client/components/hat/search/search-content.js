import React from 'react'
import { useSelector } from 'react-redux'

import Card from '../../content/content-card'

const SearchContent = () => {
  const searchData = useSelector((store) => store.search.searchData)

  return (
    <main>
      <div className="content">
        {searchData.map((product) => {
          return <Card productData={product} key={product.id} />
        })}
      </div>
    </main>
  )
}

SearchContent.propTypes = {}

export default React.memo(SearchContent)
