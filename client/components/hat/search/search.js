import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Head from '../head'
import Header from '../header'
import UnderHeader from '../underhead/under-header'
import SearchContent from './search-content'
import Footer from '../../foot/footer'
import { setLog } from '../../../redux/reducers/log'

const Search = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setLog(`navigated to ${window.location.pathname}`))
    return () => {}
  }, [dispatch])
  const underHeader = () => <UnderHeader />
  const { query } = useParams()

  return (
    <div className="body-section">
      <Head title="Search" />
      <Header UH={underHeader} />
      <SearchContent query={query} />
      <Footer />
    </div>
  )
}

Search.propTypes = {}

export default Search
