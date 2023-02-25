import { call, put, takeLatest } from "redux-saga/effects";
import { userLoginServices } from "../../services/cyberbugServices";
import { STATUS_CODE } from "../../util/settingSytem";
import { GET_LIST_PROJECT_SAGA, NEW_PROJECT_SAGA, UPDATE_PROJECT_SAGA } from "../constan/author";
import { getListProject, updateProjectAction } from "../reducer/listProjectSlice";



function*newProjectNameSaga(action){
  console.log(action);
  
    const {newProject} = action
    
  try{
    const {data, status} = yield call(()=> userLoginServices.projectAuthor(newProject))
    console.log(data, status);
    
  }catch(err){
    console.log(err.response);
  }
}

export function*followNewProjectSaga(){
    yield takeLatest(NEW_PROJECT_SAGA, newProjectNameSaga)
}

function*getListProjectAction(){
  try{
    const { data, status} = yield call(()=> userLoginServices.getListProject())
        //  console.log('getListProject', data);
    if(status === STATUS_CODE.SUCCESS){
      yield put(getListProject(data.content))
    }
    

  }catch(err){
    console.log(err.response.data);
    
  }
}

export function*followGetListProject(){
  yield takeLatest(GET_LIST_PROJECT_SAGA, getListProjectAction)
}

// function*updateProjectSaga(action){
//   try{
//     const { data, status} = yield call(() => userLoginServices.updateNewProject(action.updateProject))
  

//     console.log('dataupdate', data);
//     if(status === STATUS_CODE.SUCCESS){
//       yield put(updateProjectAction(data))
//     }
//   }catch(err){
//     console.log(err.response);
//   }
// }

// export function*followUpdateProject(){
//   yield takeLatest(UPDATE_PROJECT_SAGA, updateProjectSaga)
// }