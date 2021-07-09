import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Head from './head'
import LogHeader from './logs/log-header'
import LogTable from './logs/log-table'
import Footer from './footer'
import { getLogs } from '../redux/reducers/log'

const Logs = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLogs())
    return () => {}
  }, [dispatch])

  return (
    <div>
      <Head title="Logs" />
      <LogHeader />
      <LogTable />
      <Footer />
    </div>
  )
}

Logs.propTypes = {}

export default React.memo(Logs)
