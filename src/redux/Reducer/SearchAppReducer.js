import { CHANGE_THEME, GET_API } from "../../util/settings";

const stateDefault = {
    user: {},
    isSearch : false,
    changeTheme : false
}

export const SearchAppReducer = ( state = stateDefault,action) => {

    switch(action.type) {
        case GET_API : {
            state.user = action.payload;
            state.isSearch = true;
            return state;
        }

        case CHANGE_THEME : {

            if(state.changeTheme == false){
                state.changeTheme = true;
            }else{
                state.changeTheme = false;
            }
            
            return {...state}
        }
        default: return state;
    }
}

