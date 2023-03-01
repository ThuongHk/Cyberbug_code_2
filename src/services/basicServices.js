import axios from "axios";
import { DOMAIN_CYBERBUG, TOKEN } from "../util/settingSytem";

export class BasicServices  {


    post = (url, model) =>{
     return axios({
        url: `${DOMAIN_CYBERBUG}/${url}`,
        method: 'POST',
        data: model,
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
    })
    }

    put = (url, model) =>{
        return axios({
            url: `${DOMAIN_CYBERBUG}/${url}`,
            method: 'PUT',
            data: model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)}

        })
    }

    get = (url, model) =>{
        return axios({
            url: `${DOMAIN_CYBERBUG}/${url}`,
            method: 'GET',
            headers: {Authorization: 'Bearer ' + localStorage.getItem(TOKEN)}
        })
    }

    delete = (url, model) =>{
        return axios({
            url: `${DOMAIN_CYBERBUG}/${url}`,
            method: 'DELETE',
            headers: {Authorization: 'Bearer ' + localStorage.getItem(TOKEN)}
        })
    }
}

export const basicServices = new BasicServices();