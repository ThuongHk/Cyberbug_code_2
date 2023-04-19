import { BasicServices } from "./basicServices"




export class ProjectServices extends BasicServices {
    constructor(){
        super()
    }
    
    deleteProject = (id) =>{
        return this.delete(`api/Project/deleteProject?projectId=${id}`)
    }

    searchUserProject = (keyWord) =>{
        return this.get(`api/Users/getUser?keyword=${keyWord}`)
    }

    pushUserArray = (userItem) =>{
        return this.post(`api/Project/assignUserProject`,userItem)
    }

    deleteMember = (memberItem) =>{
        return this.post(`api/Project/removeUserFromProject`, memberItem)
    }

    projectDetail = (id) =>{
        return this.get(`api/Project/getProjectDetail?id=${id}`)
    }
    getAllProject = ()=>{
        return this.get('api/Project/getAllProject')
    }

}

export const projectServices = new ProjectServices()