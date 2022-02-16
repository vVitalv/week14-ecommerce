import React from 'react'
import { useHistory } from 'react-router-dom'

const BuyBtnPortal = (props) => {
  const history = useHistory()
  const removeBacking = () => {
    history.push(`/`)
    document.querySelector('.backing').remove()
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
