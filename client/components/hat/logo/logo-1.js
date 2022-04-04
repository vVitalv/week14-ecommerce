import React from 'react'

const Logo1 = () => {
  return (
    <svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg">
      <path
        filter="url(#shadow2)"
        stroke="purple"
        stroke-width={1}
        fill="none"
        d="M 10,10
           v 80
           l 15,-15
           s -4,-5 -4,-15
           v -20
           l 15,20
           l 15,-20
           v 20
           s 0,5 -4,15
           l 15,15
           v -80
           l -26,32
           z"
      />
      <filter id="shadow2">
        <feDropShadow dx="0" dy="0" stdDeviation="2" flood-color="purple" />
      </filter>
    </svg>
  )
}

Logo1.propTypes = {}

export default React.memo(Logo1)
