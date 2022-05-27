import React from 'react'
import { useSelector } from 'react-redux'

import Card from '../../content/content-card'

const SearchContent = () => {
  const { searchData } = useSelector((store) => store.search)

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

export default SearchContent
