import {BasicServices } from './basicServices'

export class UserServices extends BasicServices {
    constructor(){
        super()
    }

    getUser = ()=>{
        return this.get('api/Users/getUser')
    }

}

export const userServices = new UserServices()