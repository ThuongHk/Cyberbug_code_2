import React from 'react'

const Info = () => {
    return (
        <>
        <h3>Cyber Board</h3>
        <div className="info" style={{display: 'flex'}}>
        <div className="search-block">
          <input className="search" />
          <i className="fa fa-search" />
        </div>
        <div className="avatar-group" style={{display: 'flex'}}>
          <div className="avatar">
            <img src="./assets/img/download (1).jfif" alt='l3' />
          </div>
          <div className="avatar">
            <img src="./assets/img/download (2).jfif" alt='l4' />
          </div>
          <div className="avatar">
            <img src="./assets/img/download (3).jfif" alt='l5' />
          </div>
        </div>
        <div style={{marginLeft: 20}} className="text">Only My Issues</div>
        <div style={{marginLeft: 20}} className="text">Recently Updated</div>
      </div>
      </>
    )
}

export default Info