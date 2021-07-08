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
    <div className="flex flex-col bg-yellow-300 w-screen min-h-screen">
      <Head title="Logs" />
      <LogHeader />
      <LogTable />
      <Footer />
    </div>
  )
}

Logs.propTypes = {}

export default React.memo(Logs)
