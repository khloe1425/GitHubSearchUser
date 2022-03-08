import { applyMiddleware, combineReducers, createStore } from "redux";
import { SearchAppReducer } from "./Reducer/SearchAppReducer";
import reduxThunk from 'redux-thunk'
const rootReducer = combineReducers({
    SearchAppReducer,
});


export const store = createStore(
    rootReducer,
    applyMiddleware(reduxThunk),
);
