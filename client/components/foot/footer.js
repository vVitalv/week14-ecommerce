import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>{'\u00A9'} 2020 SkillCrucial Wave#3</p>
      <p>
        <Link to="/logs">Logs</Link>
      </p>
    </footer>
  )
}

Footer.propTypes = {}

export default React.memo(Footer)
