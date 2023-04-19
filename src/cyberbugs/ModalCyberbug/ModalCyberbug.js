import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRIORITY_TYPE_SAGA } from '../../redux/constan/author';
import { GET_ALL_STATUS_ID_SAGA } from '../../redux/constan/status';
import { onChangeTask } from '../../redux/reducer/taskSlice';


const ModalCyberbug = () => {

  const { taskDetailModel } = useSelector(state=>state.taskSlice);
  const {getStatusId} = useSelector(state => state.listStatusIdSlice);
  const { listPriority } = useSelector(state => state.prioritySlice);
  console.log(listPriority)
  console.log(getStatusId)
  const dispatch = useDispatch()
  console.log(taskDetailModel)

  useEffect(()=>{
   dispatch({type: GET_ALL_STATUS_ID_SAGA});
   dispatch({type: GET_PRIORITY_TYPE_SAGA})
  },[])

  const handleChange = (e) =>{
    let {name, value} = e.target
    dispatch(onChangeTask(name, value))
  }
    return (
        <div>
             <div className="modal fade" id="searchModal" tabIndex={-1} role="dialog" aria-labelledby="searchModal" aria-hidden="true">
    <div className="modal-dialog modal-search">
      <div className="modal-content">
        <div className="modal-header">
          <div className="search-block">
            <input className="search" />
            <i className="fa fa-search" />
          </div>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>Hello</p>
          <div style={{display: 'flex'}}>
            <div className="icon">
              <i className="fa fa-bookmark" />
            </div>
            <div>
              <p>cyberlearn</p>
              <p>BUG-238066</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Info Modal */}
  <div className="modal fade" id="infoModal" tabIndex={-1} role="dialog" aria-labelledby="infoModal" aria-hidden="true">
    <div className="modal-dialog modal-info">
      <div className="modal-content">
        <div className="modal-header">
          <div className="task-title">
            <i className="fa fa-bookmark" />
            <span></span>
          </div>
          <div style={{display: 'flex'}} className="task-click">
            <div>
              <i className="fab fa-telegram-plane" />
              <span style={{paddingRight: 20}}>Give feedback</span>
            </div>
            <div>
              <i className="fa fa-link" />
              <span style={{paddingRight: 20}}>Copy link</span>
            </div>
            <i className="fa fa-trash-alt" style={{cursor: 'pointer'}} />
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
        </div>
        <div className="modal-body">
          <div className="container-fluid">
            <div className="row">
              <div className="col-8">
                <p className="issue">{taskDetailModel.taskName}</p>
                <div className="description">
                  <p>Description</p>
                 {taskDetailModel.description}
                </div>
                <div className="comment">
                  <h6>Comment</h6>
                  <div className="block-comment" style={{display: 'flex'}}>
                    <div className="avatar">
                      <img src="./assets/img/download (1).jfif" alt='l6' />
                    </div>
                    <div className="input-comment">
                      <input type="text" placeholder="Add a comment ..." />
                      <p>
                        <span style={{fontWeight: 500, color: 'gray'}}>Protip:</span>
                        <span>press
                          <span style={{fontWeight: 'bold', background: '#ecedf0', color: '#b4bac6'}}>M</span>
                          to comment</span>
                      </p>
                    </div>
                  </div>
                  <div className="lastest-comment">
                    <div className="comment-item">
                      <div className="display-comment" style={{display: 'flex'}}>
                        <div className="avatar">
                          <img src="./assets/img/download (1).jfif" alt='l7' />
                        </div>
                        <div>
                          <p style={{marginBottom: 5}}>
                            Lord Gaben <span>a month ago</span>
                          </p>
                          <p style={{marginBottom: 5}}>
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Repellendus tempora ex
                            voluptatum saepe ab officiis alias totam ad
                            accusamus molestiae?
                          </p>
                          <div>
                            <span style={{color: '#929398'}}>Edit</span>
                            •
                            <span style={{color: '#929398'}}>Delete</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="status">
                  <h6>STATUS</h6>
                  <select className="custom-select" value={getStatusId.statusId} onChange={handleChange}>
                    {getStatusId.map((status,index)=>{
                      return <option key={index} value={status.statusId}>{status.statusName}</option>
                    })}
                    
                  </select>
                </div>
                <div className="assignees">
                  <h6>ASSIGNEES</h6>
                  <div style={{display: 'flex', height: 'auto', alignItem: 'center'}}>
                    {taskDetailModel.assigness.map((user,index)=>{
                      return  <div key={index} style={{display: 'flex'}} className="item">
                      <div className="avatar">
                        <img src={user.avatar} alt={user.avatar} />
                      </div>
                      <p className="name">
                        {user.name}
                        <i className="fa fa-times" style={{marginLeft: 5}} />
                      </p>
                    </div>
                    })}
                    
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <i className="fa fa-plus" style={{marginRight: 5}} /><span>Add more</span>
                    </div>
                  </div>
                </div>
                {/* <div className="reporter">
                  <h6>REPORTER</h6>
                  <div style={{display: 'flex'}} className="item">
                    <div className="avatar">
                      <img src="./assets/img/download (1).jfif" alt='l8' />
                    </div>
                    <p className="name">
                      Pickle Rick
                      <i className="fa fa-times" style={{marginLeft: 5}} />
                    </p>
                  </div>
                </div> */}
                <div className="priority" style={{marginBottom: 20}}>
                  <h6>PRIORITY</h6>
                  <select value={taskDetailModel.priorityTask.priorityId}>
                    {listPriority.map((item,index)=>{
                      return <option key={index} value={item.priorityId}>{item.priority}</option>
                    })}
                    
                   
                  </select>
                </div>
                <div className="estimate">
                  <h6>ORIGINAL ESTIMATE (HOURS)</h6>
                  <input type="text" className="estimate-hours" />
                </div>
                <div className="time-tracking">
                  <h6>TIME TRACKING</h6>
                  <div style={{display: 'flex'}}>
                    <i className="fa fa-clock" />
                    <div style={{width: '100%'}}>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <p className="logged">4h logged</p>
                        <p className="estimate-time">12h estimated</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{color: '#929398'}}>Create at a month ago</div>
                <div style={{color: '#929398'}}>Update at a few seconds ago</div>
              </div>
            </div>
          </div>
        </div>         
      </div>
    </div>
  </div>
        </div>
    )
}

export default ModalCyberbug