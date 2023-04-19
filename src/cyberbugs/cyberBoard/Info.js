import React from 'react'

const Info = ({ projectDetail }) => {

  const renderInfo = () => { 
    return projectDetail.members?.map((member, index) => {
      return ( <div key={index} className="avatar">
        <img src={member.avatar} alt={member.avatar} />
      </div>)
    })
  }
  
  return (
    <>
      <h3>{projectDetail.projectName}</h3>
      <div className="info" style={{ display: 'flex' }}>
        <div className="search-block">
          <input className="search" />
          <i className="fa fa-search" />
        </div>
        <div className="avatar-group" style={{ display: 'flex' }}>
          {renderInfo()}
        </div>
        <div style={{ marginLeft: 20 }} className="text">Only My Issues</div>
        <div style={{ marginLeft: 20 }} className="text">Recently Updated</div>
      </div>
    </>
  )
}

export default Info