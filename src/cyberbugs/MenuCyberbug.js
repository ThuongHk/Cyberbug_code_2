import React from 'react'
import './Cyberbug.css'
import { NavLink } from 'react-router-dom'

const MenuCyberbug = () => {
    return (
        
            <div className="menu">
      <div className="account">
        <div className="avatar">
          <img src="./assets/img/download.jfif" alt='sls' />
        </div>
        <div className="account-info">
          <p>CyberLearn.vn</p>
          
        </div>
      </div>
      <div className="control">
        <div>
          <i className="fa fa-credit-card" /> &nbsp;
          <NavLink to='/'>Cyber Board</NavLink>
        </div>
        <div>
          <i className="fa fa-cog" /> &nbsp;
          <NavLink to='/createproject'>Create Project</NavLink>
        </div>
        <div>
          <i className="fa fa-cog" /> &nbsp;
          <NavLink to='/projectmanage'>Project Management</NavLink>
        </div>
      </div>
      <div className="feature">
        <div>
          <i className="fa fa-truck" />
          <span>Releases</span>
        </div>
        <div>
          <i className="fa fa-equals" />
          <span>Issues and filters</span>
        </div>
        <div>
          <i className="fa fa-paste" />
          <span>Pages</span>
        </div>
        <div>
          <i className="fa fa-location-arrow" />
          <span>Reports</span>
        </div>
        <div>
          <i className="fa fa-box" />
          <span>Components</span>
        </div>
      </div>
    </div>
        
    )
}

export default MenuCyberbug