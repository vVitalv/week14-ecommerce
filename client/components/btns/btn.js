import React from 'react'

const Button = (props) => {
  const btnID = `${props.operation}-btn`
  return (
    <button type="button" id={btnID} onClick={() => props.onClickFunction(props.data)}>
      {props.sign}
    </button>
  )
}

Button.propTypes = {}

export default React.memo(Button)
