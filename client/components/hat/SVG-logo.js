import React from 'react'

const Logo = () => {
  return (
    <svg className="logo-SVG" viewBox="0 0 630 120" xmlns="http://www.w3.org/2000/svg">
      <text x="10" y="95" className="logo-text">
        MACCARONI
      </text>
      <g className="logo-g" stroke="#831843" strokeWidth={2} fill="none">
        <path
          d="M 19,34
            v 58
            h 11
            v -45
            h 6
            l 12,46
            h 9
            l 12,-46
            h 6
            v 45
            h 11
            v -58
            h -21
            l -10,40
            h -5
            l -10,-40
            h -17
            "
        />
        <path
          id="a-letter"
          d="M 121,34
            l -22,58
            h 13
            l 3,-12
            h 29
            l 3,12
            h 13
            l -22,-58
            h -12
            M 127,42
            l -9,30
            h 24
            l -9,-30
            "
        />
        <path
          id="c-letter"
          d="M 226,46
            A 29 31 10 1 0 226,77
            l -11,-4
            A 17 23 4 1 1 215,50
            l 8,-2
            "
        />
        <use href="#c-letter" x="69" />
        <use href="#a-letter" x="209" />
        <path
          d="M 383,34
            v 58
            h 13
            v -25
            A 13 11 30 0 1 415,77
            l 9,15
            h 15
            l -8,-12
            A 18 11 40 0 0 415,66
            A 12 13 30 0 0 421,33
            h -32
            M 396,40
            v 20
            h 17
            A 11 9 10 0 0 410,41
            h -8
            "
        />
        <path
          d="M 462,60
            A 17 23 0 1 1 462,64
            M 449,60
            A 30 31 0 1 1 449,64
            "
        />
        <path
          d="M 527,34
            v 58
            h 11
            v -36
            h 6
            l 24,36
            h 13
            v -58
            h -11
            v 36
            h -6
            l -24,-36
            h -8
            "
        />
        <path
          d="M 603,34
            v 58
            h 12
            v -58
            h -8
            "
        />
      </g>
      <filter id="shadow2">
        <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#f9a8d4" />
      </filter>
    </svg>
  )
}

Logo.propTypes = {}

export default React.memo(Logo)
