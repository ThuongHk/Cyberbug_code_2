import React, { useEffect } from 'react'
import Content from './Content'
import Header from './Header'
import Info from './Info'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PROJECT_DETAIL_SAGA } from '../../redux/constan/author'


const CyberBoard = (props) => {
    const {listProjectDetail} = useSelector(state => state.projectEditSlice)
    console.log(listProjectDetail)
    const dispatch = useDispatch()
    const {id} = useParams();
   
    useEffect(()=>{
      
      dispatch({
        type: GET_PROJECT_DETAIL_SAGA,
        id: id
      })
    },[])
    return (
        <div>
            <Header/>
            <Info projectDetail={listProjectDetail}/>
            <Content listTask={listProjectDetail}/>           
        </div>
    )
}

export default CyberBoard