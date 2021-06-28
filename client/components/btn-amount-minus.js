import React from 'react'

const MinusButton = (props) => {
  const btnID = `${props.operation}-btn`
  return (
    <button type="button" id={btnID} onClick={() => props.onClickFunction(props.id, props.title)}>
      -
    </button>
  )
}

MinusButton.propTypes = {}

export default React.memo(MinusButton)
