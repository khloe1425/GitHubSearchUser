import { getUserService } from "../../services/getApiByUserName";
import { CHANGE_THEME, GET_API } from "../../util/settings"


export const SearchAppAction = (userName) => {
    return async (dispatch,getState) => {
        try {
            const result = await getUserService.getApi(userName);
            await dispatch({
                type:GET_API,
                payload:result.data
            })       
        }catch(errors) {
            await dispatch({
                type:GET_API,
                payload: false
            })    
            console.log(errors.response?.data);
        }

    }
}

export const changeThemeAction =()=>{
    return ({
        type : CHANGE_THEME
    })
}