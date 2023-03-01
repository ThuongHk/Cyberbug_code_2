import { call, put, takeLatest } from "redux-saga/effects";
import { userLoginServices } from "../../services/cyberbugServices";
import { GET_ALL_CATEGORY_SAGA } from "../constan/cyberbugCategory";
import { getAllCategory } from "../reducer/cyberbugCategory";


function* getAllCategorySaga() {
    try {
        const { data, status } = yield call(userLoginServices.getAllCategory)
        yield put(getAllCategory(data.content))
    } catch (err) {
        console.log(err.response.data);
    }
}

export function* followGetCategorySaga() {
    yield takeLatest(GET_ALL_CATEGORY_SAGA, getAllCategorySaga)
}