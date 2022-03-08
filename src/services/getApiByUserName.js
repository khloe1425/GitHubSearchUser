import axios from "axios"
import { baseService } from "./baseService";
import { ulr } from "../util/settings";
export class GetUserService extends baseService { 


    getApi = (useName) => {
        return this.get(`${ulr}/${useName}`);
    }
   

}


export const getUserService = new GetUserService();


// blob //file