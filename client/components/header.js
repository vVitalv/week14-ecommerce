import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const Header = (props) => (
  <Helmet>
    <title>SkillCrucial E-commerce - {props.title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#FF0000" />
  </Helmet>
)

Header.propTypes = {
  title: PropTypes.string
}

Header.defaultProps = {
  title: 'skillcrucial.com'
}

export default Header
