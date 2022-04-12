import React from 'react'

const Logo = () => {
  let theme = 'lime'
  const toggleTheme = () => {
    const logoNeon = document.querySelector('.logo-g')
    const logoLamp = document.querySelector('.logo-lamp')
    if (theme === 'lime') {
      document.documentElement.classList.add('dark')
      logoNeon.setAttribute('filter', 'url(#shadow3)')
      logoLamp.setAttribute('filter', 'url(#shadow2)')
      logoNeon.setAttribute('stroke', '#f9a8d4')
      logoLamp.setAttribute('fill-opacity', '1')
      theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      logoNeon.removeAttribute('filter')
      logoLamp.removeAttribute('filter')
      logoNeon.setAttribute('stroke', '#831843')
      logoLamp.setAttribute('fill-opacity', '0.2')
      theme = 'lime'
    }
  }
  return (
    <svg className="logo-SVG" viewBox="0 0 660 100" xmlns="http://www.w3.org/2000/svg">
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
      <g cursor="pointer" onClick={toggleTheme}>
        <path
          stroke="black"
          strokeWidth={2}
          d="M 643,0
            v 40
            M 637, 44
            A 1 1 0 0 1 649,44
            v 8
            h -12
            z
            "
        />
        <path
          className="logo-lamp"
          stroke="black"
          fill="#fde047"
          fillOpacity={0.2}
          d="M 638,52
          v 7
          A 11 13 0 1 0 648,59
          v -7
          z
          "
        />
        <path
          stroke="gray"
          fill="none"
          d="M 642,52
          l -3,23
          l 2,-10
          l 2,10
          l 2,-10
          l 2,10
          l -3,-23
          "
        />
      </g>
      <filter id="shadow2">
        <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#fde047" />
      </filter>
      <filter id="shadow3">
        <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#f9a8d4">
          <animate
            attributeName="stdDeviation"
            values="2;4;2;3;4"
            keyTimes="0; 0.1; 0.5; 0.75; 1"
            dur="4s"
            repeatCount="indefinite"
          />
        </feDropShadow>
      </filter>
    </svg>
  )
}

Logo.propTypes = {}

export default React.memo(Logo)
