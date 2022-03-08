import axios from "axios"
import {ulr} from '../util/settings'
export class baseService {
    get = (url) => {
        return axios({
            url:`${url}`,
            method:'GET',
        })
    }
}