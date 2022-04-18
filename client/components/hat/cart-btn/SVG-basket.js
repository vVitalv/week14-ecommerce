import React from 'react'

const BasketEmpty = (props) => {
  return (
    <svg className="basket-SVG" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g className="basket-empty">
        <path
          d="M 20,90
          h 60
          l 15,-40
          h -90
          z
          "
        />
        <line x1="50" y1="50" x2="50" y2="5" />
        <line x1="50" y1="80" x2="50" y2="60" />
        <line x1="39" y1="80" x2="37" y2="60" />
        <line x1="28" y1="80" x2="23" y2="60" />
        <line x1="61" y1="80" x2="63" y2="60" />
        <line x1="72" y1="80" x2="77" y2="60" />
      </g>
      <g className="basket-prod">
        {props.basketAmount > 0 && props.basketAmount < 10 ? (
          <path
            d="M 66,46
            A 2 6 10 0 1 90,46
            "
          />
        ) : null}
        {props.basketAmount > 2 ? (
          <path
            d="M 12,46
            l -4,-10
            l 2,-6
            l -4,-10
            l 6,-3
            l 5,10
            l 7,3
            l 8,16
            "
          />
        ) : null}
        {props.basketAmount > 4 ? (
          <path
            d="M 38,46
            l -3,-15
            l -6,-5
            l -3,-10
            l -6,2
            l 3,10
            l 2,1
            l 8.5,17
            "
          />
        ) : null}
        {props.basketAmount > 6 ? (
          <path
            d="M 44,46
            l -1,-17
            l -5,-6
            l -1,-11
            l -5,0.5
            l 1,11
            l -2,2.5
            l 5.5,4.5
            l 3,15.5
            "
          />
        ) : null}
        {props.basketAmount > 10 ? (
          <path
            d="M 88,46
            l 5,-15
            A 23 17 0 0 0 85,18
            l 5,-12
            l -6,-3
            l -6,11
            A 19 20 0 0 0 59,15
            l -4,6
            v 25
            "
          />
        ) : null}
      </g>
    </svg>
  )
}

BasketEmpty.propTypes = {}

export default React.memo(BasketEmpty)
