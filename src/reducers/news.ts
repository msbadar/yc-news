export const initialState = {}
export default (state = initialState, action: any) => {
    switch (action.type) {
        case "FETCH_SUCCESS": {
            return action.data
        }
        default:
            return state
    }
}