import React from 'react'
import './Cyberbug.css'
import MenuCyberbug from './MenuCyberbug'
import ModalCyberbug from './ModalCyberbug/ModalCyberbug'
import SibarCyberbug from './SibarCyberbug'

const CyberbugTemplate = ({children}) => {
  return (
    <div>
      <div className="jira">      
        <SibarCyberbug /> 
        <MenuCyberbug />       
        <div className="main">        
          {children}
        </div>
      </div>      
      <ModalCyberbug />
    </div>
  )
}

export default CyberbugTemplate
