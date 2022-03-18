import React from 'react'
import { useDispatch } from 'react-redux'

import { purgeSearch } from '../../redux/reducers/search'

const NotFoundPortal = () => {
  const dispatch = useDispatch()
  const purge = () => {
    return dispatch(purgeSearch())
  }
  return (
    <div className="not-found-msg" onAnimationEnd={purge}>
      Not found. Try some beer {'\uD83C\uDF7A'}
    </div>
  )
}

NotFoundPortal.propTypes = {}

export default React.memo(NotFoundPortal)
