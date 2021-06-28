import React from 'react'

const SortButton = (props) => {
  const btnID = `${props.sort}-sort-button`
  const imgAlt = `${props.sort}-sorting`
  return (
    <button type="button" id={btnID} onClick={() => props.onClickFunction(props.sort)}>
      <img src={props.sortImg} alt={imgAlt} />
    </button>
  )
}

SortButton.propTypes = {}

export default React.memo(SortButton)
