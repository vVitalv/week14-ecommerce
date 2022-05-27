import React, { useEffect } from 'react'
import Div100vh from 'react-div-100vh'
import { useDispatch } from 'react-redux'

import Head from '../../head'
import Header from '../../header'
import RegistrationForm from './regist-form'
import Footer from '../../../foot/footer'
import { setLog } from '../../../../redux/reducers/log'

const Registration = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setLog(`navigated to ${window.location.pathname}`))
    return () => {}
  }, [dispatch])

  return (
    <Div100vh>
      <Head title="Registration" />
      <div className="viewport">
        <Header />
        <RegistrationForm />
        <Footer />
      </div>
    </Div100vh>
  )
}

export default Registration
