import { all } from 'redux-saga/effects'

import * as followActionTodolist from './actionSagas/todolistSaga';
import * as followActionUserAction from './actionSagas/userLoginSaga';
import * as followCategory from './actionSagas/categorySaga';
import * as followProjectAuthor from './actionSagas/projectAuthorSaga';
import * as followCreateTask from './actionSagas/taskSaga';
import * as followStatusId from './actionSagas/statusIdSaga';



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
    followProjectAuthor.followGetListProject(),
    followProjectAuthor.followUpdateProject(),
    followProjectAuthor.followDeleteProject(),
    followProjectAuthor.followGetUserProject(),
    followProjectAuthor.followPushUserArray(),
    followProjectAuthor.followDeleteMember(),
    followProjectAuthor.followGetProjectDetail(),
    followProjectAuthor.followGetAllProject(),
    followProjectAuthor.followGetAllTaskType(),
    followProjectAuthor.followGetPriority(),
    followProjectAuthor.followGetUser(),

    followCreateTask.followCreateTask(),
    followCreateTask.followUpdateUser(),
    followCreateTask.followGetTaskDetailSaga(),

    followStatusId.followGetStatusId()



 ])

 








  
}