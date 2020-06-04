import getPagination from "../get-pagination";
import mock from "../../__mock__/feed"

it("should return pagination data", () => {
    const { page, nbPages } = getPagination({ news: mock });
    expect(page).toBe(mock.page)
    expect(nbPages).toBe(mock.nbPages)
})

