import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getCardData, getSorted } from '../../redux/reducers/cardData'
import Button from '../btns/btn'

const Pagination = () => {
  const dispatch = useDispatch()
  const productList = useSelector((store) => store.cardData.goodsList)
  const currentPage = useSelector((store) => store.cardData.currentPage)
  const cardsOnPage = useSelector((store) => store.cardData.cardsOnPage)
  const currentSortType = useSelector((store) => store.cardData.sortType)
  const changePageOnClick = (nextPage) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return dispatch(currentSortType ? getSorted(currentSortType, nextPage) : getCardData(nextPage))
  }

  return (
    <div className="pagination">
      <Button
        operation="previous"
        disabled={currentPage === 0}
        sign="<"
        data={currentPage - 1}
        onClickFunction={changePageOnClick}
      />
      <Button
        operation="-2"
        disabled={currentPage === 0}
        sign={currentPage < 3 ? 1 : currentPage - 1}
        data={currentPage < 3 ? 0 : currentPage - 2}
        onClickFunction={changePageOnClick}
      />
      <Button
        operation="-1"
        disabled={currentPage === 1}
        sign={currentPage < 3 ? 2 : currentPage}
        data={currentPage < 3 ? 1 : currentPage - 1}
        onClickFunction={changePageOnClick}
      />
      <Button
        operation="current"
        disabled={currentPage > 1}
        sign={currentPage < 3 ? 3 : currentPage + 1}
        data={currentPage < 3 ? 2 : currentPage}
        onClickFunction={changePageOnClick}
      />
      <Button
        operation="+1"
        disabled={productList.length < cardsOnPage}
        sign={currentPage < 3 ? 4 : currentPage + 2}
        data={currentPage < 3 ? 3 : currentPage + 1}
        onClickFunction={changePageOnClick}
      />
      <Button
        operation="+2"
        disabled={productList.length < cardsOnPage}
        sign={currentPage < 3 ? 5 : currentPage + 3}
        data={currentPage < 3 ? 4 : currentPage + 2}
        onClickFunction={changePageOnClick}
      />
      <Button
        operation="next"
        disabled={productList.length < cardsOnPage}
        sign=">"
        data={currentPage + 1}
        onClickFunction={changePageOnClick}
      />
    </div>
  )
}

Pagination.propTypes = {}

export default React.memo(Pagination)
