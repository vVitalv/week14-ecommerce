import React from 'react'

import Button from '../btns/btn'

const Pagination = () => {
  return (
    <div className="pagination">
      <Button operation="minus" sign="1" data="" onClickFunction="null" />
      <Button operation="minus" sign="2" data="" onClickFunction="null" />
      <Button operation="minus" sign="3" data="" onClickFunction="null" />
      <Button operation="minus" sign="4" data="" onClickFunction="null" />
    </div>
  )
}

Pagination.propTypes = {}

export default React.memo(Pagination)
