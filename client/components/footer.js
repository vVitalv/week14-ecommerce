import React from 'react'

const Footer = () => {
  return (
    <div className="h-12 w-screen text-xl font-bold text-gray-300 p-4 bg-yellow-500">
      {'\u00A9'} 2020 SkillCrucial #3
    </div>
  )
}

Footer.propTypes = {}

export default React.memo(Footer)
