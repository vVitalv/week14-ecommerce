import React from 'react'

const ThemeButton = () => {
  let theme = 'lime'
  const toggleTheme = () => {
    const neonLogo = document.querySelector('.logo-g')
    const themeBtn = document.querySelector('.theme-btn-g')
    if (theme === 'lime') {
      document.documentElement.classList.add('dark')
      neonLogo.setAttribute('filter', 'url(#shadow2)')
      themeBtn.setAttribute('filter', 'url(#shadow)')
      neonLogo.setAttribute('stroke', '#f9a8d4')
      themeBtn.setAttribute('stroke', '#f9a8d4')
      themeBtn.setAttribute('fill', '#f9a8d4')
      theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      neonLogo.removeAttribute('filter')
      themeBtn.removeAttribute('filter')
      neonLogo.setAttribute('stroke', '#831843')
      themeBtn.setAttribute('stroke', 'purple')
      themeBtn.setAttribute('fill', 'purple')
      theme = 'lime'
    }
  }

  return (
    <svg
      className="theme-btn"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      onClick={toggleTheme}
    >
      <g>
        <circle cx="50" cy="50" r="45" stroke="#a1a1aa" fill="#27272a" />
        <g className="theme-btn-g" stroke="purple" strokeWidth={4} fill="purple">
          <circle cx="50" cy="50" r="15" />
          <line id="sun-beam" x1="20" y1="50" x2="80" y2="50" strokeLinecap="round" />
          <use href="#sun-beam" transform="rotate(30 50 50)" />
          <use href="#sun-beam" transform="rotate(60 50 50)" />
          <use href="#sun-beam" transform="rotate(90 50 50)" />
          <use href="#sun-beam" transform="rotate(120 50 50)" />
          <use href="#sun-beam" transform="rotate(150 50 50)" />
        </g>
      </g>
      <filter id="shadow">
        <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#f9a8d4" />
      </filter>
    </svg>
  )
}

ThemeButton.propTypes = {}

export default React.memo(ThemeButton)
