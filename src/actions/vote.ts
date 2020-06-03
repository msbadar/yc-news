import * as _ from "lodash";
import { updateDB } from "../localstorage-api";
export default (id: number) => async (dispatch: any, getState: any) => {
    const oldActions = getState().userActions;
    const prevValue = _.get(oldActions, `${id}.votes`, 0)
    const userActions = _.set(oldActions, `${id}.votes`, prevValue + 1)
    await updateDB(userActions)
    dispatch({
        type: "VOTE",
        userActions
    })
}