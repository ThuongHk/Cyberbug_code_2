import { BasicServices } from "./basicServices";




export class TaskServices extends BasicServices{
    constructor(){
        super()
    }

    getTaskDetail = (taskId) =>{
        return this.get(`api/Project/getTaskDetail?taskId=${taskId}`)
    }
}

export const taskServices = new TaskServices()