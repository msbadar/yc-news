export const initialState = {}
export default (state = initialState, action: any) => {
    switch (action.type) {
        case "FETCH_USER_ACTIONS":
        case "VOTE":
        case "HIDE":
            return action.userActions
        default:
            return state
    }
}