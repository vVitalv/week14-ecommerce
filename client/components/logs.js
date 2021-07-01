import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

import Header from './header'
import Head from './head'
import Footer from './footer'
import { getLogs, clearLogs } from '../redux/reducers/log'

const Logs = () => {
  const logs = useSelector((store) => store.log.logs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLogs())
    axios({
      method: 'post',
      url: '/api/v1/log',
      data: {
        time: new Date().toLocaleString(),
        action: `navigate to ${window.location.pathname}`
      }
    })
    return () => {}
  }, [dispatch])

  return (
    <div className="flex flex-col bg-yellow-300 w-screen min-h-screen">
      <Header title="Logs" />
      <Head />
      <table className="table-auto mt-40 text-gray-700 fond-bold">
        <thead className="bg-yellow-400 text-lg">
          <tr>
            <th>Time</th>
            <th>Log name</th>
          </tr>
        </thead>
        <tbody className="text-center font-semibold">
          {logs.map((log, index) => {
            return (
              <tr key={`log-${index}`}>
                <td>{log.time}</td>
                <td>{log.action}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button
        type="button"
        id="buy-button"
        className="text-xl font-bold self-end w-32 h-20 bg-indigo-700 rounded-xl focus:outline-none m-8"
        onClick={() => dispatch(clearLogs())}
      >
        Clear logs
      </button>
      <Footer />
    </div>
  )
}

Logs.propTypes = {}

export default React.memo(Logs)
