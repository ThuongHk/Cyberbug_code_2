import { call, put, takeLatest } from "redux-saga/effects";
import { createTaskServices } from "../../services/createTaskServices";
import { taskServices } from "../../services/taskServices";
import { taskTypeServices } from "../../services/taskTypeServices";
import { STATUS_CODE } from "../../util/settingSytem";
import { CREATE_TASK_SAGA, GET_TASK_DETAIL_SAGA, UPDATE_USER_SAGA } from "../constan/task";
import { getTaskDetail } from "../reducer/taskSlice";
import { getUser } from "../reducer/userSlice";



function*createTaskSaga(action){
    try{
        const { data, status} = yield call(()=> createTaskServices.createTask(action.objectTask))
        console.log(data);        

    }catch(err){
        console.log(err);
        
    }
}
export function*followCreateTask(){
    yield takeLatest(CREATE_TASK_SAGA, createTaskSaga)
}


function*updateUserSaga(action){
   
    try{
         const { data, status} = yield call(()=> taskTypeServices.updateUser(action.value))
         yield put(getUser(data.content))
    }catch(err){
        console.log(err);
        if(err.response?.data.statusCode === STATUS_CODE.NOT_FOUND) {
            yield put(getUser([]))
        }
    }
}

export function*followUpdateUser(){
    yield takeLatest(UPDATE_USER_SAGA, updateUserSaga)
}

function*getTaskDetailSaga(action){
    try{
        const { data, status} = yield call(()=> taskServices.getTaskDetail(action.taskId) )
        console.log(data)
        yield put(getTaskDetail(data.content))

    }catch(err){
        console.log(err)
    }
}


export function*followGetTaskDetailSaga(){
    yield takeLatest(GET_TASK_DETAIL_SAGA, getTaskDetailSaga)
}