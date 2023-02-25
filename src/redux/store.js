import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./rootSaga";

import { configureStore } from "@reduxjs/toolkit";
// ----slice
import cyberbugCategory from "./reducer/cyberbugCategory";
import loadingSlice from "./reducer/loadingSlice";
import navigateSlice from "./reducer/navigateSlice";
import savaTokenSlice from "./reducer/savaTokenSlice";
import todolistSlice from "./reducer/todolistSlice";
import projectEditSlice from "./reducer/projectEditSlice";
import cyberbugModalSlice from "./reducer/cyberbugModalSlice";
import listProjectSlice from "./reducer/listProjectSlice";


const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer:{
        todolistSlice,
        loadingSlice,
        savaTokenSlice,
        navigateSlice,
        cyberbugCategory,
        projectEditSlice,
        cyberbugModalSlice,
        listProjectSlice 
    },
    middleware: [sagaMiddleware]
})
sagaMiddleware.run(rootSaga)
export default store;