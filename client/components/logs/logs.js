import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Head from '../hat/head'
import LogHeader from './log-header'
import LogTable from './log-table'
import Footer from '../foot/footer'
import { getLogs, setLog } from '../../redux/reducers/log'

const Logs = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    setLog()
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
