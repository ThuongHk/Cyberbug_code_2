import { all } from 'redux-saga/effects'

import * as followActionTodolist from './actionSagas/todolistSaga';
import * as followActionUserAction from './actionSagas/userLoginSaga';
import * as followCategory from './actionSagas/categorySaga';
import * as followProjectAuthor from './actionSagas/projectAuthorSaga';



export function*rootSaga(){

 yield all([
   // ----todolist----
    followActionTodolist.followGetTaskList(),
    followActionTodolist.followCheckDoneTask(),
    followActionTodolist.followAddTaskList(),
    followActionTodolist.followRejectTask(),
    followActionTodolist.followDeleteTask(),
    //  -----login----
    followActionUserAction.followUserLogin(),
    // ==== cyberbugCategory ==========================
    followCategory.followGetCategorySaga(),
     // ------newProject---------
    followProjectAuthor.followNewProjectSaga(),
    followProjectAuthor.followGetListProject()

 ])

 








  
}