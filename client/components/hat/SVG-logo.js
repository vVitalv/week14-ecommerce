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
  const neonFilter = theme === 'dark' ? 'url(#shadow3)' : ''
  const lampFilter = theme === 'dark' ? 'url(#shadow2)' : ''

  return (
    <svg
      className="logo-SVG"
      viewBox="0 0 670 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MACCARONI logotype"
    >
      <Link to="/" aria-label="home">
        <g>
          <path
            className="letter"
            id="m-letter"
            d="M 15,30
            v 66
            h 20
            v -36
            l 9,36
            h 17
            l 9,-36
            v 36
            h 20
            v -66
            h -29
            l -9,38
            l -9,-38
            z
            "
          />
          <path
            id="m-letter-neon"
            className="letter-neon"
            filter={neonFilter}
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
        </g>
        <g>
          <path
            className="letter"
            id="a-letter"
            d="M 118,30
            l -25,66
            h 24
            l 3,-12
            h 20
            l 3,12
            h 24
            l -25,-66
            z
            M 130,46
            l -6,22
            h 12
            z
            "
          />
          <path
            id="a-letter-neon"
            className="letter-neon"
            filter={neonFilter}
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
        </g>
        <g>
          <path
            id="c-letter"
            className="letter"
            d="M 232,48
            A 34 36 10 1 0 232,75
            l -19,-7
            A 12 18 3 1 1 213,54
            z
            "
          />
          <path
            id="c-letter-neon"
            className="letter-neon"
            filter={neonFilter}
            d="M 226,46
            A 29 31 10 1 0 226,77
            l -11,-4
            A 17 23 4 1 1 215,50
            l 8,-2
            "
          />
        </g>
        <g>
          <path
            id="c-letter2"
            className="letter"
            d="M 300,48
            A 34 36 10 1 0 300,75
            l -19,-7
            A 12 18 3 1 1 281,54
            z
            "
          />
          <path
            id="c-letter2-neon"
            className="letter-neon"
            filter={neonFilter}
            d="M 295,46
            A 29 31 10 1 0 295,77
            l -11,-4
            A 17 23 4 1 1 284,50
            l 8,-2
            "
          />
        </g>
        <g>
          <path
            className="letter"
            id="a-letter2"
            d="M 327,30
            l -25,66
            h 24
            l 3,-12
            h 20
            l 3,12
            h 24
            l -25,-66
            z
            M 339,46
            l -6,22
            h 12
            z
            "
          />
          <path
            id="a-letter2-neon"
            className="letter-neon"
            filter={neonFilter}
            d="M 330,34
            l -22,58
            h 13
            l 3,-12
            h 29
            l 3,12
            h 13
            l -22,-58
            h -12
            M 336,42
            l -9,30
            h 24
            l -9,-30
            "
          />
        </g>
        <g>
          <path
            className="letter"
            id="r-letter"
            d="M 378,30
            v 66
            h 23
            v -25
            A 13 11 40 0 1 410,81
            l 9,15
            h 28
            l -7,-12
            A 18 6 60 0 0 428,67
            A 21 20 10 0 0 424,30
            z
            M 401,45
            v 11
            h 12
            A 11 7 10 0 0 413,45
            z
            "
          />
          <path
            id="r-letter-neon"
            className="letter-neon"
            filter={neonFilter}
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
        </g>
        <g>
          <path
            className="letter"
            id="o-letter"
            d="M 466,60
            A 13 20 0 1 1 466,64
            z
            M 444,60
            A 35 35 0 1 1 444,64
            z
        "
          />
          <path
            id="o-letter-neon"
            className="letter-neon"
            filter={neonFilter}
            d="M 462,60
            A 17 23 0 1 1 462,64
            M 449,60
            A 30 31 0 1 1 449,64
            "
          />
        </g>
        <g>
          <path
            id="n-letter"
            className="letter"
            d="M 522,30
            v 66
            h 21
            v -34
            l 22,35
            h 21
            v -66
            h -21
            v 34
            l -22,-35
            z
            "
          />
          <path
            id="n-letter-neon"
            className="letter-neon"
            filter={neonFilter}
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
        </g>
        <g>
          <path
            id="i-letter"
            className="letter"
            d="M 598,30
            v 66
            h 22
            v -66
            z
            "
          />
          <path
            id="i-letter-neon"
            className="letter-neon"
            filter={neonFilter}
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
        className="lamp-wire"
        d="M 653,0
            v 3
            A 1 4 0 0 0 652,15
            A 1 3 0 0 1 653,35
            v 3
            "
      />
      <g className="lamp" onClick={toggleTheme}>
        <path
          className="lamp-socket"
          d="M 647, 44
            A 1 1 0 0 1 659,44
            v 8
            h -12
            z
            "
        />
        <path
          className="lamp-bulb"
          filter={lampFilter}
          d="M 648,52
          v 7
          A 11 13 0 1 0 658,59
          v -7
          z
          "
        />
        <path
          className="lamp-glower"
          d="M 652,52
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
            values="2;4;3;3"
            keyTimes="0; 0.4; 0.6; 1"
            dur="2s"
            repeatCount="indefinite"
          />
        </feDropShadow>
      </filter>
    </svg>
  )
}

Logo.propTypes = {}

export default React.memo(Logo)
