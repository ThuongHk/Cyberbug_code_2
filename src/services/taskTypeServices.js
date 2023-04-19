import { BasicServices } from './basicServices'

export class TaskTypeServices extends BasicServices {
    constructor(){
        super()
    }
    getTaskType = ()=>{
        return this.get('api/TaskType/getAll')
    }

    updateUser = (value)=>{
        return this.get(`api/Users/getUserByProjectId?idProject=${value}`)
    }

}

export const taskTypeServices = new  TaskTypeServices()