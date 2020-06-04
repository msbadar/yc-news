import getResults from "../get-results";
import feedMock from "../../__mock__/feed"
import userActionMock from "../../__mock__/user-actions"

it("should return results data", () => {
    const news = getResults({
        news: feedMock,
        userActions: userActionMock
    });
    const expectedNews = [
        ...feedMock.hits
    ].map((data) => ({
        ...data,
        hidden: userActionMock[data.objectID].hidden ? true : false,
        totalPoint: userActionMock[data.objectID].votes + data.points
    }))
    .filter((data) => !data.hidden)
    expect(news).toStrictEqual(expectedNews)
})

