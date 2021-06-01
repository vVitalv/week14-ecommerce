import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="flex justify-between items-center h-16 max-w-full text-xl font-bold text-gray-300 bg-yellow-500">
      <p className="ml-4">{'\u00A9'} 2020 SkillCrucial Wave#3</p>
      <p className="mr-12">
        <Link to="/logs">Logs</Link>
      </p>
    </div>
  )
}

Footer.propTypes = {}

export default React.memo(Footer)
