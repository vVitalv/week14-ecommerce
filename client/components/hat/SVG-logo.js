import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { changeTheme } from '../../redux/reducers/theme'
import { setLog } from '../../redux/reducers/log'

const Logo = () => {
  const dispatch = useDispatch()
  const { theme } = useSelector((store) => store.theme)
  const toggleTheme = () => {
    if (theme === 'lime') {
      document.documentElement.classList.add('dark')
      dispatch(changeTheme('dark'))
      dispatch(setLog('changed theme to dark'))
    } else {
      document.documentElement.classList.remove('dark')
      dispatch(changeTheme('lime'))
      dispatch(setLog('changed theme to lime'))
    }
  }

  return (
    <svg className="logo-SVG" viewBox="0 0 660 100" xmlns="http://www.w3.org/2000/svg">
      <Link to="/">
        <g className="logo-text" stroke="gray" strokeWidth={3}>
          <text id="m-letter" x="10" y="95">
            M
          </text>
          <text id="a-letter" x="94" y="95">
            A
          </text>
          <text id="c-letter" x="164" y="95">
            C
          </text>
          <text id="c-letter2" x="233" y="95">
            C
          </text>
          <text id="a-letter2" x="303" y="95">
            A
          </text>
          <text id="r-letter" x="373" y="95">
            R
          </text>
          <text id="o-letter" x="441" y="95">
            O
          </text>
          <text id="n-letter" x="517" y="95">
            N
          </text>
          <text id="i-letter" x="591" y="95">
            I
          </text>
        </g>
        <g
          className="logo-neon"
          stroke={theme === 'dark' ? '#f9a8d4' : '#831843'}
          strokeWidth={2}
          fill="none"
          filter={theme === 'dark' ? 'url(#shadow3)' : ''}
        >
          <path
            id="m-letter-neon"
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
            id="a-letter-neon"
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
            id="c-letter-neon"
            d="M 226,46
            A 29 31 10 1 0 226,77
            l -11,-4
            A 17 23 4 1 1 215,50
            l 8,-2
            "
          />
          <use id="c-letter2-neon" href="#c-letter-neon" x="69" />
          <use id="a-letter2-neon" href="#a-letter-neon" x="209" />
          <path
            id="r-letter-neon"
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
            id="o-letter-neon"
            d="M 462,60
            A 17 23 0 1 1 462,64
            M 449,60
            A 30 31 0 1 1 449,64
            "
          />
          <path
            id="n-letter-neon"
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
            id="i-letter-neon"
            d="M 603,34
            v 58
            h 12
            v -58
            h -8
            "
          />
        </g>
      </Link>
      <path
        fill="none"
        stroke="black"
        strokeWidth={2}
        d="M 643,0
            v 3
            A 1 4 0 0 0 642,15
            A 1 3 0 0 1 643,35
            v 3
            "
      />
      <g cursor="pointer" stroke="gray" onClick={toggleTheme}>
        <path
          stroke="black"
          strokeWidth={2}
          d="M 637, 44
            A 1 1 0 0 1 649,44
            v 8
            h -12
            z
            "
        />
        <path
          filter={theme === 'dark' ? 'url(#shadow2)' : ''}
          fill="#fde047"
          fillOpacity={theme === 'dark' ? '1' : '0.2'}
          d="M 638,52
          v 7
          A 11 13 0 1 0 648,59
          v -7
          z
          "
        >
          <animate
            attributeName="fill-opacity"
            begin="mouseover"
            to="1"
            dur="0.3s"
            repeatCount="3"
          />
        </path>
        <path
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
        <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#f9a8d4">
          <animate
            attributeName="stdDeviation"
            values="2;4;4;2"
            keyTimes="0; 0.4; 0.6; 1"
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
