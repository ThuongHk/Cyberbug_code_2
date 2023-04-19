import { BasicServices } from './basicServices'

export class PriorityServices extends BasicServices {
    constructor(){
        super()
    }

    getPriority = ()=>{
        return this.get(`api/Priority/getAll`)
    }

}

export const priorityServices = new PriorityServices();