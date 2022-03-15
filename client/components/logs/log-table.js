import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { clearLogs } from '../../redux/reducers/log'

const LogTable = () => {
  const dispatch = useDispatch()
  const clearOnClick = () => {
    return dispatch(clearLogs())
  }
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
      <button type="button" onClick={() => clearOnClick()}>
        Clear logs
      </button>
    </main>
  )
}

LogTable.propTypes = {}

export default React.memo(LogTable)
