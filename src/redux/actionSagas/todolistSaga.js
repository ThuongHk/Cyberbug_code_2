import { call, delay, put, takeLatest } from "redux-saga/effects";
import { todolistServices } from "../../services/todolistServices";
import { STATUS_CODE } from "../../util/settingSytem";
import { ADD_TASK_LIST_SAGA, CHECK_DONE_TASK_SAGA, DELETE_TASK, GET_TASK_LIST_SAGA, REJECT_TASK } from "../constan/todolist";
import { displayLoading } from "../reducer/loadingSlice";
import { getTodolist } from "../reducer/todolistSlice";

function*getTaskListSaga(){
    try{
       const { data, status } = yield call(todolistServices.getTaskList)
       
       yield put(getTodolist(data))
       console.log(data, status);
       
    }catch(err){
        console.log(err);
    }
}

export function*followGetTaskList(){
    yield takeLatest(GET_TASK_LIST_SAGA, getTaskListSaga)
}

function*checkDoneTask(action){
   
    const {taskName} = action
    try{
       const { data, status} = yield call(()=> todolistServices.checkDoneTask(taskName))
      if(status === 200){
        yield put({
            type: GET_TASK_LIST_SAGA
        })
      }
    }catch(err){
        console.log(err);
    }
}

export function*followCheckDoneTask(){
    yield takeLatest(CHECK_DONE_TASK_SAGA, checkDoneTask)
}


function*addTaskList(action){
    console.log(action);
    const {taskName} = action;
    yield put(displayLoading(true));
    yield delay(1000)
    try{
          const {data, status} = yield call(()=> todolistServices.addTaskList(taskName))
          if(status === 200){
            yield put({
                type: GET_TASK_LIST_SAGA
            })
          }
         
          
    }catch(err){
        console.log(err);
    }
    yield put(displayLoading(false));
}

export function*followAddTaskList(){
    yield takeLatest(ADD_TASK_LIST_SAGA, addTaskList)
}


function*rejectTask(action){
    console.log(action);
    
    const { taskName} = action;
    try{
         const { data, status } = yield call(()=> todolistServices.rejectTask(taskName))
         console.log(status);
         
         if(status === STATUS_CODE.SUCCESS){
              yield put({
                type: GET_TASK_LIST_SAGA
              })
         }
    }catch(err){
        console.log(err.response.data);
        
    }

}

export function*followRejectTask(){
    yield takeLatest(REJECT_TASK, rejectTask)
}


function*deleteTask(action){   
    
 const {taskName} = action;
 try{
    const { data, status } = yield call(()=> todolistServices.deleteTask(taskName))
    if(status === STATUS_CODE.SUCCESS){
        yield put({
            type: GET_TASK_LIST_SAGA
        })
    }

 }catch(err){
    console.log(err.response.data);
    
 }
}

export function*followDeleteTask(){
    yield takeLatest(DELETE_TASK, deleteTask)
}