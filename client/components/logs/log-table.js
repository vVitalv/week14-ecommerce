import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Button from '../btns/btn'
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
        <tbody>
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
      <Button operation="clear-logs" sign="Clear logs" data={null} onClickFunction={clearOnClick} />
    </main>
  )
}

LogTable.propTypes = {}

export default React.memo(LogTable)
