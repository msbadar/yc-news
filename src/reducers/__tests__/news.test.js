import newsReducer, { initialState } from "../news";
import mock from "../../__mock__/feed"

it("should return initial state", () => {
    const state = newsReducer(void (0), {});
    expect(state).toBe(initialState)
})

it("should update state for FETCH_SUCCESS", () => {
    const state = newsReducer(void (0), { type: "FETCH_SUCCESS", data: mock });
    expect(state).toBe(mock)
})

