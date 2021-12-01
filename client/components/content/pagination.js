import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getCardData, getSorted } from '../../redux/reducers/cardData'
import Button from '../btns/btn'

const Pagination = () => {
  const dispatch = useDispatch()
  const currentPage = useSelector((store) => store.cardData.currentPage)
  const currentSortType = useSelector((store) => store.cardData.sortType)
  const changePageOnClick = (nextPage) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return dispatch(currentSortType ? getSorted(currentSortType, nextPage) : getCardData(nextPage))
  }
  return (
    <div className="pagination">
      <Button
        operation="previous"
        sign="<"
        data={currentPage - 1}
        onClickFunction={changePageOnClick}
      />
      <Button
        operation="minus"
        sign={currentPage - 2}
        data={currentPage - 2}
        onClickFunction={changePageOnClick}
      />
      <Button
        operation="minus"
        sign={currentPage - 1}
        data={currentPage - 1}
        onClickFunction={changePageOnClick}
      />
      <Button
        operation="minus"
        sign={currentPage}
        data={currentPage}
        onClickFunction={changePageOnClick}
      />
      <Button
        operation="minus"
        sign={currentPage + 1}
        data={currentPage + 1}
        onClickFunction={changePageOnClick}
      />
      <Button
        operation="minus"
        sign={currentPage + 2}
        data={currentPage + 2}
        onClickFunction={changePageOnClick}
      />
      <Button
        operation="next"
        sign=">"
        data={currentPage + 1}
        onClickFunction={changePageOnClick}
      />
    </div>
  )
}

Pagination.propTypes = {}

export default React.memo(Pagination)
