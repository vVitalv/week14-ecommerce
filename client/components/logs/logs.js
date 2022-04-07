import React from 'react'

import Head from '../hat/head'
import Header from '../hat/header'
import LogHeaderThead from './log-header-thead'
import LogTable from './log-table'
import Footer from '../foot/footer'

const Logs = () => {
  const underHeader = () => <LogHeaderThead />
  return (
    <div>
      <Head title="Logs" />
      <Header UH={underHeader} />
      <LogTable />
      <Footer />
    </div>
  )
}

Logs.propTypes = {}

export default React.memo(Logs)
