import {combineReducers} from "redux"
import news from "./news"
import userActions from "./user-actions"

export default combineReducers({
    news,
    userActions
})