import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { purgeCart } from '../../redux/reducers/basket'
import { setLog } from '../../redux/reducers/log'

const BuyBtnPortal = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  function removeBacking() {
    props.togglePortal(false)
    history.push(`/`)
    dispatch(setLog(`sent the donation of ${props.summaryCost} ${props.currency}`))
    dispatch(purgeCart())
  }

  return (
    <div
      className="backing"
      role="menuitem"
      tabIndex={0}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          props.togglePortal(false)
        }
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          props.togglePortal(false)
        }
      }}
    >
      <div className="basket-buy-popup">
        Bless you for your donation {props.summaryCost} {props.currency} to the Ramzan Kadyrov
        Forgiveness Fund!
        <button type="button" className="basket-buy-popup-btn" onClick={removeBacking}>
          Sorry!
        </button>
      </div>
    </div>
  )
}

BuyBtnPortal.propTypes = {}

export default React.memo(BuyBtnPortal)
