import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Head from '../../head'
import Header from '../../header'
import RegistrationForm from './regist-form'
import Footer from '../../../foot/footer'
import { setLog } from '../../../../redux/reducers/log'

const Registration = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setLog(`navigate to ${window.location.pathname}`))
    return () => {}
  }, [dispatch])

  return (
    <div className="body-section">
      <Head title="Registration" />
      <Header />
      <RegistrationForm />
      <Footer />
    </div>
  )
}

Registration.propTypes = {}

export default Registration
