import { call, put, takeLatest } from "redux-saga/effects";
import { userLoginServices } from "../../services/cyberbugServices";
import { priorityServices } from "../../services/priorityServices";
import { projectServices } from "../../services/projectServices";
import { taskTypeServices } from "../../services/taskTypeServices";
import { userServices } from "../../services/userServices";
import { STATUS_CODE } from "../../util/settingSytem";
import { ADD_USER_PROJECT_SAGA, DELETE_MEMBER, DELETE_PROJECT_SAGA, GET_ALL_PROJECT_SAGA, GET_ALL_TASK_TYPE_SAGA, GET_LIST_PROJECT_SAGA, GET_PRIORITY_TYPE_SAGA, GET_PROJECT_DETAIL_SAGA, GET_USER_SAGA, NEW_PROJECT_SAGA, PUSH_USER_ARRAY_SAGA, UPDATE_PROJECT_SAGA } from "../constan/author";
import { getAllProject, getListProject, updateProjectAction } from "../reducer/listProjectSlice";
import { getPriority } from "../reducer/prioritySlice";
import { projectDetail } from "../reducer/projectEditSlice";
import { addAutho } from "../reducer/savaTokenSlice";
import { getTaskType } from "../reducer/taskTypeSlice";
import { getUser } from "../reducer/userSlice";



function* newProjectNameSaga(action) {
  console.log(action);

  const { newProject } = action

  try {
    const { data, status } = yield call(() => userLoginServices.projectAuthor(newProject))
    console.log(data, status);

  } catch (err) {
    console.log(err.response);
  }
}

export function* followNewProjectSaga() {
  yield takeLatest(NEW_PROJECT_SAGA, newProjectNameSaga)
}

function* getListProjectAction() {
  try {
    const { data, status } = yield call(() => userLoginServices.getListProject())

    if (status === STATUS_CODE.SUCCESS) {
      yield put(getListProject(data.content))
    }


  } catch (err) {
    console.log(err.response.data);

  }
}

export function* followGetListProject() {
  yield takeLatest(GET_LIST_PROJECT_SAGA, getListProjectAction)
}


function* updateProjectSaga(action) {
  console.log(action);

  const { projectUpdate } = action
  try {
    const { data, status } = yield call(() => userLoginServices.updateProject(projectUpdate))


    if (status === STATUS_CODE.SUCCESS) {

      yield put({
        type: GET_LIST_PROJECT_SAGA
      })
    }
  } catch (err) {
    console.log(err);
  }
}

export function* followUpdateProject() {
  yield takeLatest(UPDATE_PROJECT_SAGA, updateProjectSaga)
}



function* deteteProjectSaga(action) {

  const { projectId } = action
  try {
    yield call(() => { projectServices.deleteProject(projectId) })

    yield put({
      type: GET_LIST_PROJECT_SAGA
    })

  } catch (err) {
    console.log(err);
  }
}

export function* followDeleteProject() {
  yield takeLatest(DELETE_PROJECT_SAGA, deteteProjectSaga)
}

function* getUserProjectSaga(action) {
  try {
    const { data, status } = yield call(() => projectServices.searchUserProject(action.keyWord));


    yield put(addAutho(data.content))

  } catch (err) {
    console.log(err);
  }
}


export function* followGetUserProject() {
  yield takeLatest(ADD_USER_PROJECT_SAGA, getUserProjectSaga)
}

function* pushUserArray(action) {
  console.log(action);
  try {
    const { data, status } = yield call(() => projectServices.pushUserArray(action.userItem))

    console.log(status);
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_LIST_PROJECT_SAGA
      })
    }

  } catch (err) {
    console.log(err);
  }
}

export function* followPushUserArray() {
  yield takeLatest(PUSH_USER_ARRAY_SAGA, pushUserArray)
}

function* deleteMemberSaga(action) {

  try {
    yield call(() => projectServices.deleteMember(action.memberItem))
    yield put({
      type: GET_LIST_PROJECT_SAGA
    })
  } catch (err) {
    console.log(err);
  }
}


export function* followDeleteMember() {
  yield takeLatest(DELETE_MEMBER, deleteMemberSaga)
}


function* getProjectDetailSaga(action) {
  try {
    const { data, status } = yield call(() => projectServices.projectDetail(action.id))
   
    yield put(projectDetail(data.content))
  } catch (err) {
    console.log(err);
  }
}



export function* followGetProjectDetail() {
  yield takeLatest(GET_PROJECT_DETAIL_SAGA, getProjectDetailSaga)
}


function* getAllProjectSaga() {
  try {
    const { data, status } = yield call(() => projectServices.getAllProject())


    yield put(getAllProject(data.content))
  } catch (err) {
    console.log(err)
  }
}


export function* followGetAllProject() {
  yield takeLatest(GET_ALL_PROJECT_SAGA, getAllProjectSaga)
}


function* getAllTaskTypeSaga() {
  try {
    const { data, status } = yield call(() => taskTypeServices.getTaskType())
    yield put(getTaskType(data.content))

  } catch (err) {
    console.log(err);
  }
}

export function* followGetAllTaskType() {
  yield takeLatest(GET_ALL_TASK_TYPE_SAGA, getAllTaskTypeSaga)
}

function* getPrioritySaga() {
  try {
    const { data, status } = yield call(() => priorityServices.getPriority())

    yield put(getPriority(data.content))

  } catch (err) {
    console.log(err);
  }
}

export function* followGetPriority() {
  yield takeLatest(GET_PRIORITY_TYPE_SAGA, getPrioritySaga)
}

function*getUserSaga(){
  try{ 
   const { data, status } =  yield call(()=> userServices.getUser())
   console.log(data);
   yield put(getUser(data.content))

  }catch(err){
    console.log(err);
  }
}

export function*followGetUser(){
  yield takeLatest(GET_USER_SAGA, getUserSaga)
}