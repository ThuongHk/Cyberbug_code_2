import { BasicServices } from "./basicServices";

export class StatusServicesId extends BasicServices {
   constructor(){
    super();
   }
     getStatusId = ()=>{
      return this.get('api/Status/getAll')
     }
}

export const statusServicesId = new StatusServicesId()