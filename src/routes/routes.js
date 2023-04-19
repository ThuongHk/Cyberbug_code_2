import CyberBoard from "../cyberbugs/cyberBoard/CyberBoard";
import CreateProject from "../pages/createProject/CreateProject";
import LoginCyberLearn from '../login/LoginCyberLearn';
import TodolistRFC from "../Todolist_partten/TodolistRFC";
import ProjectManagement from "../pages/projectManagement/ProjectManagement";





export const publicRoutes = [
    { path: '/cyberbug', component: CyberBoard},   
    { path: '/createproject', component: CreateProject},
    { path: '/projectmanage', component: ProjectManagement},
    { path: '/projectmanage/:id', component: CyberBoard},
    { path: '/todolistsaga', component: TodolistRFC, layout: TodolistRFC },
    { path: '/', component: LoginCyberLearn, layout: LoginCyberLearn}

]