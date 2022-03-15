import React from 'react'

const LogHeaderThead = () => {
  return (
    <div className="log-underheader">
      <table className="log-underheader-table">
        <thead className="log-underheader-thead">
          <tr>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

LogHeaderThead.propTypes = {}

export default React.memo(LogHeaderThead)
