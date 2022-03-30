import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Head from '../head'
import Header from '../header'
import SearchContent from './search-content'
import Footer from '../../foot/footer'
import { setLog } from '../../../redux/reducers/log'

const Search = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setLog(`navigate to ${window.location.pathname}`))
    return () => {}
  }, [dispatch])

  return (
    <div className="body-section">
      <Head title="Search" />
      <Header />
      <SearchContent />
      <Footer />
    </div>
  )
}

Search.propTypes = {}

export default Search
