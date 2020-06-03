import { fetchDB } from "../localstorage-api";
export default () => async (dispatch: any, getState: any) => {
    const userActions =  await fetchDB()
    dispatch({
        type: "FETCH_USER_ACTIONS",
        userActions
    })
}