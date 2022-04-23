import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { getCardData } from '../redux/reducers/cardData'
import { getCurrency } from '../redux/reducers/currency'
import { trySignIn } from '../redux/reducers/auth'

const Startup = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrency())
    dispatch(getCardData(0))
    setTimeout(() => dispatch(trySignIn()), 5000)
    return () => {}
  }, [dispatch])

  return props.children
}

Startup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default Startup
