import axios from "axios";
import { DOMAIN_TODOLIST } from "../util/settingSytem";

export class TodolistServices {
    constructor(){
    }
   getTaskList = ()=>{
        return axios({
            url: `${DOMAIN_TODOLIST}/api/ToDoList/GetAllTask`,
            method: 'GET'
        })
       }

     checkDoneTask =  (taskName)=>{
        return axios({
          url: `${DOMAIN_TODOLIST}/api/ToDoList/doneTask?taskName=${taskName}`,
          method: 'PUT'
         
        })  
  
         }

       addTaskList =  (taskName)=>{
            return axios({
                url: `${DOMAIN_TODOLIST}/api/ToDoList/AddTask`,
                method: 'POST',
                data: {taskName: taskName}
            })
          }
       rejectTask = (taskName)=>{
        return axios({
          url: `${DOMAIN_TODOLIST}/api/ToDoList/rejectTask?taskName=${taskName}`,
          method: 'PUT'
        })
       }   
       deleteTask = (taskName)=>{
        return axios({
          url: `${DOMAIN_TODOLIST}/api/ToDoList/deleteTask?taskName=${taskName}`,
          method: 'DELETE'
        })
       }
}

export const todolistServices = new TodolistServices();