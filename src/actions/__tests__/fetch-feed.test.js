import fetchFeed from "../fetch-feed";
import mock from "../../__mock__/feed";
import fetch, {enableFetchMocks} from "jest-fetch-mock";


enableFetchMocks()

it('should call fetch feed api', async () => {
    const dispatch = jest.fn()
    fetch.mockResponseOnce(JSON.stringify(mock))
    await fetchFeed()(dispatch)
    expect(fetch).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledWith({
        type: "FETCH_SUCCESS",
        data: mock
    })
})