import React from 'react'

const Button = (props) => {
  return (
    <button
      type="button"
      className={props.className}
      disabled={props.disabled}
      onClick={() => props.onClickFunction(props.data)}
    >
      {props.sign}
    </button>
  )
}

Button.propTypes = {}

export default React.memo(Button)
