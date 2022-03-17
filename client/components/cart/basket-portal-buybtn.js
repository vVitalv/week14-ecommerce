import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { purgeCart } from '../../redux/reducers/basket'

const BuyBtnPortal = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const removeBacking = () => {
    props.setPortalOpen(false)
    history.push(`/`)
    return dispatch(purgeCart())
  }
  const escapeModalOnKeyPress = (e) => {
    if (e.key === 'Escape') {
      props.setPortalOpen(false)
    }
  }
  const escapeModalOnClick = (e) => {
    if (e.target === e.currentTarget) {
      props.setPortalOpen(false)
    }
  }

  return (
    <div
      className="backing"
      role="textbox"
      tabIndex="0"
      onClickCapture={(e) => escapeModalOnClick(e)}
      onKeyPress={(e) => escapeModalOnKeyPress(e)}
    >
      <div className="basket-buy-popup">
        Bless you for your donation {props.summaryCost} {props.currency} to the Ramzan Kadyrov
        Forgiveness Fund!
        <button type="button" className="basket-buy-popup-btn" onClick={() => removeBacking()}>
          Sorry!
        </button>
      </div>
    </div>
  )
}

BuyBtnPortal.propTypes = {}

export default React.memo(BuyBtnPortal)
