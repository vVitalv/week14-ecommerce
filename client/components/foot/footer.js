import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [scroll, setScroll] = useState(0)
    useEffect(() => {
      window.onscroll = () => {
        setScroll(window.scrollY)
      }
    }, [])
  const footerClassName = scroll > 0 ? 'footer footer_hide' : 'footer'

  return (
    <footer className={footerClassName}>
      <p>{'\u00A9'} 2022 SkillCrucial Wave#3</p>
      <p>
        <Link to="/logs">Logs</Link>
      </p>
    </footer>
  )
}

Footer.propTypes = {}

export default React.memo(Footer)
