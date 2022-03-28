import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

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
      <table className="log-table">
        <tbody className="log-table-tbody">
          {logs.map((log) => {
            return (
              <tr key={`log-${log.time}`}>
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
    </main>
  )
}

LogTable.propTypes = {}

export default React.memo(LogTable)
