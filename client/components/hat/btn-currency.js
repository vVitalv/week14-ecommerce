import React from 'react'

const CurrencyButton = (props) => {
  const btnID = `${props.currency}-btn`
  return (
    <button type="button" id={btnID} onClick={() => props.onClickFunction(props.currency)}>
      {props.currency}
    </button>
  )
}

CurrencyButton.propTypes = {}

export default React.memo(CurrencyButton)
