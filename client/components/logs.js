import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Header from './header'
import Head from './head'
import Footer from './footer'
import { getLogs } from '../redux/reducers/log'

const Logs = () => {
  const logs = useSelector((store) => store.log.logs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLogs())
    return () => {}
  }, [dispatch])

  if (logs.length === 0) {
    return (
      <div className="flex flex-col bg-yellow-300 w-screen h-screen">
        <Header title="Logs" />
        <Head />
      </div>
    )
  }
  return (
    <div className="flex flex-col bg-yellow-300 w-screen min-h-screen">
      <Header title="Logs" />
      <Head />
      <div className="mt-40 text-gray-700 fond-bold">
        {logs.map((log) => {
          return (
            <div key={log.time}>
              <div>{log.time}</div>
              <div>{log.action}</div>
            </div>
          )
        })}
      </div>
      <button
        type="button"
        id="buy-button"
        className="text-3xl font-bold self-end w-40 h-20 bg-indigo-700 rounded-xl focus:outline-none m-8"
      >
        Buy
      </button>
      <Footer />
    </div>
  )
}

Logs.propTypes = {}

export default React.memo(Logs)
