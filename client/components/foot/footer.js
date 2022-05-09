import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  let footerClassName = 'footer'
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.scrollY)
    }
    return () => {}
  }, [])

  footerClassName =
    scroll < 200 || scroll > document.documentElement.scrollHeight - 800
      ? 'footer footer_show'
      : 'footer footer_hide'

  return (
    <footer className={footerClassName}>
      <p>
        {'\u00A9'} 2022 CPL.Risitas{' '}
        <a className="sc-link" href="https://skillcrucial.com" target="_blank" rel="noreferrer">
          SkillCrucial
        </a>
      </p>
      <p>
        <Link to="/logs">Logs</Link>
      </p>
    </footer>
  )
}

Footer.propTypes = {}

export default React.memo(Footer)
