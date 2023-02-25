import { Route, Routes, useNavigate } from 'react-router-dom'
import CyberbugTemplate from './cyberbugs/CyberbugTemplate'
import { publicRoutes } from './routes/routes'
import { Fragment } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { saveNavigate } from './redux/reducer/navigateSlice';
import CyberbugModal from './HOC/cyberbugHOC/CyberbugModal';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
 useEffect(()=>{
  dispatch(saveNavigate(navigate))
  
 },[])
  return (
    <div className="App">
      <CyberbugModal/>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component
          let Layout = CyberbugTemplate
          if (route.layout) {
            Layout = route.layout
          } else if(route.layout === null)
           {
            Layout = Fragment
          }
          return (<Route key={index} path={route.path} element={<Layout> <Page /> </Layout>}/> )
        })}
      </Routes>
    </div>
  )
}

export default App
