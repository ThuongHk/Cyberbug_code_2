import React from 'react'
import { useDispatch } from 'react-redux'
import FormCreateTask from '../components/formCreateTask/FormCreateTask';
import { openFormEdit } from '../redux/reducer/cyberbugModalSlice';
import './Cyberbug.css'


const SibarCyberbug = () => {

    const dispatch =useDispatch();
  return (
      <div className="sideBar">
          <div className="sideBar-top">
              <div className="sideBar-icon">
                  <i className="fab fa-jira" />
              </div>
              <div
                  className="sideBar-icon"
                  data-toggle="modal"
                  data-target="#searchModal"
                  style={{ cursor: 'pointer' }}
              >
                  <i className="fa fa-search" />
                  <span className="title">SEARCH ISSUES</span>
              </div>
              <div className="sideBar-icon">
                  <i className="fa fa-plus" />
                  <span className="title" style={{cursor: 'pointer'}} onClick={()=>{
                    const action = {visible: true, Component: <FormCreateTask/>}
                    dispatch(openFormEdit(action))
                  }}>CREATE TASK</span>
              </div>
          </div>
          <div className="sideBar-bottom">
              <div className="sideBar-icon">
                  <i className="fa fa-question-circle" />
                  <span className="title">ABOUT</span>
              </div>
          </div>
      </div>
  )
}

export default SibarCyberbug
