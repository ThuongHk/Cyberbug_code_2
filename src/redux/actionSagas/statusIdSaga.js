import { call, put, takeLatest } from "redux-saga/effects";
import { statusServicesId } from "../../services/statusServices";
import { GET_ALL_STATUS_ID_SAGA } from "../constan/status";
import { getStatusId } from "../reducer/listStatusIdSlice";


function*getStatusIdSaga(){
    try{
      const { data, status} = yield call(()=> statusServicesId.getStatusId())
      yield put(getStatusId(data.content))

    }catch(err){
        console.log(err)
    }
}


export function*followGetStatusId(){
    yield takeLatest(GET_ALL_STATUS_ID_SAGA, getStatusIdSaga)
}