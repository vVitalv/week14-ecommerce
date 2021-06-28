import React from 'react'

const PlusButton = (props) => {
  const btnID = `${props.operation}-btn`
  return (
    <button type="button" id={btnID} onClick={() => props.onClickFunction(props.cardData)}>
      +
    </button>
  )
}

PlusButton.propTypes = {}

export default React.memo(PlusButton)
