import React from 'react'
import { useDispatch } from 'react-redux';
import { GET_TASK_DETAIL_SAGA } from '../../redux/constan/task';

const Content = (props) => {
  const { listTask } = props;

  const dispatch = useDispatch()
  const renderListTask = () => {
    return listTask.lstTask?.map((task, index) => {
      return (
        <div className="card" style={{ width: '17rem', height: '25rem' }}>
          <div className="card-header">
            {task.taskName}
          </div>
          <ul className="list-group list-group-flush">
            {task.lstTaskDeTail.map((tsk, index) => {
              return <li key={index} className="list-group-item" data-toggle="modal" data-target="#infoModal" style={{ cursor: 'pointer' }}
              onClick={()=> { dispatch({type: GET_TASK_DETAIL_SAGA, taskId: tsk.taskId})}}
              >
                <p>
                  <b>{tsk.taskName}</b>
                </p>
                <div className="block" style={{ display: 'flex' }}>
                  <div className="block-left">
                    <i className="fa fa-bookmark" />
                    <i className="fa fa-arrow-up" />
                  </div>
                  <div className="block-right">
                    <div className="avatar-group" style={{ display: 'flex' }}>
                      {tsk.assigness?.map((ass, index) => {
                        <div className="avatar">
                          <img src={ass.avatar} alt={ass.avatar} />
                        </div>
                      })}
                    </div>
                  </div>
                </div>
              </li>
            })}

          </ul>
        </div>
      )
    })
  }




  return (
    <div className="content" style={{ display: 'flex' }}>
      {renderListTask()}
      {/* <div className="card" style={{width: '17rem', height: '25rem'}}>
          <div className="card-header">
            SELECTED FOR DEVELOPMENT 2
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
          </ul>
        </div>
        <div className="card" style={{width: '17rem', height: '25rem'}}>
          <div className="card-header">
            IN PROGRESS 2
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
          </ul>
        </div>
        <div className="card" style={{width: '17rem', height: '25rem'}}>
          <div className="card-header">
            DONE 3
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div> */}
    </div>
  )
}

export default Content