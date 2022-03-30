import React from 'react'

import Head from '../hat/head'
import LogHeader from './log-header'
import LogTable from './log-table'
import Footer from '../foot/footer'

const Logs = () => {
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
