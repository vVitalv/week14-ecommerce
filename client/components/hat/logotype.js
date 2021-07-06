import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo-2.png'

const Logotype = () => {
  return (
    <Link to="/" className="logo-link">
      <img src={logo} alt="Logo" className="logo" />
      <div className="logo-text">
        <span className="logo-letter logo-letter_red">E</span>
        <span className="logo-letter logo-letter_indigo">-</span>
        <span className="logo-letter logo-letter_purple">C</span>
        <span className="logo-letter logo-letter_green">O</span>
        <span className="logo-letter logo-letter_blue">M</span>
        <span className="logo-letter logo-letter_pink">M</span>
        <span className="logo-letter logo-letter_red">E</span>
        <span className="logo-letter logo-letter_indigo">R</span>
        <span className="logo-letter logo-letter_purple">C</span>
        <span className="logo-letter logo-letter_green">E</span>
      </div>
    </Link>
  )
}

Logotype.propTypes = {}

export default React.memo(Logotype)
