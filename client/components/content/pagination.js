import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getCardData, getSorted } from '../../redux/reducers/cardData'

const Pagination = () => {
  const dispatch = useDispatch()
  const productList = useSelector((store) => store.cardData.productList)
  const currentPage = useSelector((store) => store.cardData.currentPage)
  const cardsOnPage = useSelector((store) => store.cardData.cardsOnPage)
  const currentSortType = useSelector((store) => store.cardData.sortType)
  const changePageOnClick = (nextPage) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return dispatch(currentSortType ? getSorted(currentSortType, nextPage) : getCardData(nextPage))
  }

  return (
    <div className="pagination">
      <button
        type="button"
        className="pagination-btn"
        onClick={() => changePageOnClick(currentPage - 1)}
        disabled={currentPage === 0}
      >
        {'\u2991'}
      </button>
      <button
        type="button"
        className={currentPage === 0 ? 'pagination-btn pagination-btn_current' : 'pagination-btn'}
        onClick={() => changePageOnClick(currentPage < 3 ? 0 : currentPage - 2)}
        disabled={currentPage === 0}
      >
        {currentPage < 3 ? 1 : currentPage - 1}
      </button>
      <button
        type="button"
        className={currentPage === 1 ? 'pagination-btn pagination-btn_current' : 'pagination-btn'}
        onClick={() => changePageOnClick(currentPage < 3 ? 1 : currentPage - 1)}
        disabled={currentPage === 1}
      >
        {currentPage < 3 ? 2 : currentPage}
      </button>
      <button
        type="button"
        className={currentPage > 1 ? 'pagination-btn pagination-btn_current' : 'pagination-btn'}
        onClick={() => changePageOnClick(currentPage < 3 ? 2 : currentPage)}
        disabled={currentPage > 1}
      >
        {currentPage < 3 ? 3 : currentPage + 1}
      </button>
      <button
        type="button"
        className="pagination-btn"
        onClick={() => changePageOnClick(currentPage < 3 ? 3 : currentPage + 1)}
        disabled={productList.length < cardsOnPage}
      >
        {currentPage < 3 ? 4 : currentPage + 2}
      </button>
      <button
        type="button"
        className="pagination-btn"
        onClick={() => changePageOnClick(currentPage < 3 ? 4 : currentPage + 2)}
        disabled={productList.length < cardsOnPage}
      >
        {currentPage < 3 ? 5 : currentPage + 3}
      </button>
      <button
        type="button"
        className="pagination-btn"
        onClick={() => changePageOnClick(currentPage + 1)}
        disabled={productList.length < cardsOnPage}
      >
        {'\u2992'}
      </button>
    </div>
  )
}

Pagination.propTypes = {}

export default React.memo(Pagination)
