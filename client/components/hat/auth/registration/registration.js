import React, { useEffect } from 'react'

import Head from '../../head'
import HeaderWithoutUH from '../../header-without-UH'
import RegistrationForm from './regist-form'
import Footer from '../../../foot/footer'
import { setLog } from '../../../../redux/reducers/log'

const Home = () => {
  useEffect(() => {
    setLog()
    return () => {}
  }, [])

  return (
    <div className="body-section">
      <Head title="Registration" />
      <HeaderWithoutUH />
      <RegistrationForm />
      <Footer />
    </div>
  )
}

Home.propTypes = {}

export default Home
