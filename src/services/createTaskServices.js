import {BasicServices} from './basicServices'

export class CreateTaskServices extends BasicServices {
  constructor(){
    super()
  }

  createTask = (objectTask) =>{
    return this.post('api/Project/createTask', objectTask)
  }
}

export const createTaskServices = new CreateTaskServices()