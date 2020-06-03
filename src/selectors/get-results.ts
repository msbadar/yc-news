import _ from "lodash";
export default (st: any) => {
    const hits = st.news.hits || [];
    const userActions = st.userActions || {}
    return hits.map((news: any) => {
        return {
            ...news,
            totalPoint: news.points + _.get(userActions, `${news.objectID}.votes`, 0),
            hidden: _.get(userActions, `${news.objectID}.hidden`, false),
        }
    }).filter((news: any) => !news.hidden)
}