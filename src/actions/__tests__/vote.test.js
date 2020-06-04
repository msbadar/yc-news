import voteAction from "../vote";
import userActionMock from "../../__mock__/user-actions";

const id = 23404604
it('should set vote values', async () => {
    const dispatch = jest.fn()
    const getState = jest.fn().mockImplementation(() => ({ userActions: userActionMock }))
    const updatedData = {
        ...userActionMock,
        [id]: {
            ...userActionMock[id],
            votes: userActionMock[id].votes + 1
        }
    }
    await voteAction(id)(dispatch, getState)
    const dbData = localStorage.getItem('userActions')
    expect(dispatch).toHaveBeenCalledWith({
        type: "VOTE",
        userActions: updatedData
    })
    expect(dbData).toBe(JSON.stringify(updatedData))
})