import userActionReducer, { initialState } from "../user-actions";
import mock from "../../__mock__/user-actions"

it("should return initial state", () => {
    const state = userActionReducer(void (0), {});
    expect(state).toBe(initialState)
})

it("should update state for FETCH_USER_ACTIONS", () => {
    const state = userActionReducer(void (0), { type: "FETCH_USER_ACTIONS", userActions: mock });
    expect(state).toBe(mock)
})


it("should update state for VOTE", () => {
    const state = userActionReducer(void (0), { type: "VOTE", userActions: mock });
    expect(state).toBe(mock)
})


it("should update state for HIDE", () => {
    const state = userActionReducer(void (0), { type: "HIDE", userActions: mock });
    expect(state).toBe(mock)
})

