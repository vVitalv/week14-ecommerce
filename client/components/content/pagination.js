import React from 'react'
import { useSelector } from 'react-redux'

import Button from '../btns/btn'

const Pagination = () => {
  const currentPage = useSelector((store) => store.cardData.currentPage)
  return (
    <div className="pagination">
      <Button operation="previous" sign="<" data="" onClickFunction="null" />
      <Button operation="minus" sign="1" data="" onClickFunction="null" />
      <Button operation="minus" sign="2" data="" onClickFunction="null" />
      <Button operation="minus" sign={currentPage} data="" onClickFunction="null" />
      <Button operation="minus" sign="4" data="" onClickFunction="null" />
      <Button operation="minus" sign="4" data="" onClickFunction="null" />
      <Button operation="next" sign=">" data="" onClickFunction="null" />
    </div>
  )
}

Pagination.propTypes = {}

export default React.memo(Pagination)
