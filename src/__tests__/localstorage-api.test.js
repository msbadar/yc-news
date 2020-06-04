import { updateDB, fetchDB } from "../localstorage-api"
import mock from "../__mock__/user-actions";

it("update data to local storage", async ()=>{
    await updateDB(mock)
    const updatedItems = localStorage.getItem('userActions')
    expect(updatedItems).toBe(JSON.stringify(mock))
})

it("get data from local storage", async ()=>{
    const exisitingData = localStorage.getItem('userActions')
    const fechedData =  await fetchDB()
    expect(exisitingData).toBe(JSON.stringify(fechedData))
})
