import fetchUserActions from "../fetch-user-actions";
import mock from "../../__mock__/user-actions";

it('should call fetch user actions api', async () => {
    localStorage.setItem('userActions', JSON.stringify(mock))
    const dispatch = jest.fn()
    await fetchUserActions()(dispatch)
    expect(dispatch).toHaveBeenCalledWith({
        type: "FETCH_USER_ACTIONS",
        userActions: mock
    })
})