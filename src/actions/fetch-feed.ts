export default (page?: string | null) => async (dispatch: any) => {
    let query = `tags=front_page`
    if (page) {
        query = `${query}&page=${page}`
    }
    const response = await fetch(`https://hn.algolia.com/api/v1/search?${query}`)
    const json = await response.json()
    return dispatch({
        type: "FETCH_SUCCESS",
        data: json
    })
}