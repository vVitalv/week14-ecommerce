import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { getLogs, clearLogs } from '../../redux/reducers/log'

const LogTable = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLogs())
    return () => {}
  }, [dispatch])
  const { logs } = useSelector((store) => store.log)
  return (
    <main>
      <div className="log-scroll">
        <table className="log-table">
          <tbody className="log-table-tbody">
            {logs.map((log) => {
              return (
                <tr key={uuidv4()}>
                  <td>{log.time}</td>
                  <td>{log.action}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <button type="button" className="log-table-button" onClick={() => dispatch(clearLogs())}>
          Clear logs
        </button>
      </div>
    </main>
  )
}

export default LogTable
