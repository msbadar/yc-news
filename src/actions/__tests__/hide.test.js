import hideAction from "../hide";
import userActionMock from "../../__mock__/user-actions";

const id = 23404604
it('should set hidden flag', async () => {
    const dispatch = jest.fn()
    const getState = jest.fn().mockImplementation(() => ({ userActions: userActionMock }))
    await hideAction(id)(dispatch, getState)
    const updatedData = {
        ...userActionMock,
        [id]:{
            ...userActionMock[id],
            hidden: true
        }
    }
    const dbData = localStorage.getItem('userActions')

    expect(dispatch).toHaveBeenCalledWith({
        type: "HIDE",
        userActions: updatedData
    })

    expect(dbData).toBe(JSON.stringify(updatedData))
    
})