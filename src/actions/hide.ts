import * as _ from "lodash";
import { updateDB } from "../localstorage-api";
export default (id: number) => async (dispatch: any, getState: any) => {
    const oldActions = getState().userActions;
    const prevValue = _.get(oldActions, `${id}.hidden`, false)
    const userActions = _.set(oldActions, `${id}.hidden`, !prevValue)
    await updateDB(userActions)
    dispatch({
        type: "HIDE",
        userActions
    })
}