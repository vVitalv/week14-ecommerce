import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const Head = (props) => (
  <Helmet>
    <title>Maccaroni - {props.title}</title>
    <meta charSet="utf-8" />
    <meta name="description" content="Maccaroni shop" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta content="true" name="HandheldFriendly" />
    <meta content="width" name="MobileOptimized" />
    <meta content="yes" name="apple-mobile-web-app-capable" />
    <meta name="theme-color" content="#bef264" />
  </Helmet>
)

Head.propTypes = {
  title: PropTypes.string
}

Head.defaultProps = {
  title: 'Maccaroni'
}

export default Head
