import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        2022 CPL.Risitas{' '}
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
