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

  return (
    <div className="backing">
      <div className="buy-popup">
        Bless you for your donation {props.summaryCost} {props.currency} to the Ramzan Kadyrov
        Forgiveness Fund!
        <button type="button" className="confirm-btn" onClick={removeBacking}>
          Sorry!
        </button>
      </div>
    </div>
  )
}

BuyBtnPortal.propTypes = {}

export default React.memo(BuyBtnPortal)
