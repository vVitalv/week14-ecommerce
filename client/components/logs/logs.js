import React, { useEffect } from 'react'

import Head from '../hat/head'
import LogHeader from './log-header'
import LogTable from './log-table'
import Footer from '../foot/footer'
import { setLog } from '../../redux/reducers/log'

const Logs = () => {
  useEffect(() => {
    setLog(`navigate to ${window.location.pathname}`)
    return () => {}
  }, [])

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
