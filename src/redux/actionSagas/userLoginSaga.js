import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { userLoginServices } from "../../services/cyberbugServices";
import { TOKEN, USER_LOGIN } from "../../util/settingSytem";
import { LOGIN_SAGA } from "../constan/login";
import { displayLoading } from "../reducer/loadingSlice";
import { tokenLogin } from "../reducer/savaTokenSlice";

function* userLogin(action) {
    const { userLogin } = action;
    yield put(displayLoading(true));
    yield delay(500);
    try {
        const { data, status } = yield call(() => userLoginServices.userLogin(userLogin)
       
        );
        
        localStorage.setItem(TOKEN, data.content.accessToken);
        localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));

        const navigate = yield select((state) => state.navigateSlice.userNavigate);

        navigate("/todolistsaga");
        yield put(tokenLogin(data.content));
    } catch (err) {
        console.log(err);
    }
    yield put(displayLoading(false));
}
export function* followUserLogin() {
    yield takeLatest(LOGIN_SAGA, userLogin);
}
