import React, { useEffect } from 'react'

import Head from '../head'
import Header from '../header'
import SearchContent from './search-content'
import Footer from '../../foot/footer'
import { setLog } from '../../../redux/reducers/log'

const Search = () => {
  useEffect(() => {
    setLog()
    return () => {}
  }, [])

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
