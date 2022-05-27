import React from 'react'
import Div100vh from 'react-div-100vh'

import Head from '../hat/head'
import Header from '../hat/header'
import LogHeaderThead from './log-header-thead'
import LogTable from './log-table'
import Footer from '../foot/footer'

const Logs = () => {
  const underHeader = () => <LogHeaderThead />
  return (
    <Div100vh>
      <Head title="Logs" />
      <div className="viewport">
        <Header UH={underHeader} />
        <LogTable />
        <Footer />
      </div>
    </Div100vh>
  )
}

export default Logs
