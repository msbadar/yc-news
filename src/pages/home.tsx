import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
import vote from "../actions/vote"
import hide from "../actions/hide"
import fetchFeed from "../actions/fetch-feed";
import fetchUserActions from "../actions/fetch-user-actions";
import Chart from "../components/chart";
import { useSelector } from "react-redux";
import moment from "moment"
import _ from "lodash"

const Header = () => {
    return (
        <div className={'data-row header'}>
            <div> Comments </div>
            <div> Vote Count </div>
            <div> Up vote </div>
            <div> News Details </div>
        </div>
    )
}

const Row = ({ news, handleHide, handleVote }: any) => {

    const {
        num_comments,
        title,
        url,
        author,
        created_at,
        totalPoint,
        objectID: id
    } = news;


    return (
        <div className="data-row">
            <span>{num_comments}</span>
            <span>{totalPoint}</span>
            <button onClick={() => handleVote(id)}> ▲ </button>
            <div>
                <a href={url}>{title}</a>
                <div className="actions">
                    <a>(source)</a>
                    <a>by {author}</a>
                    <a>{moment(created_at).fromNow()}</a>
                    <a onClick={() => handleHide(id)}>hide</a>
                </div>
            </div>
        </div>
    )
}

const selector = (st: any) => {
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

const Table = ({
    data
}: {
    data: []
}) => {

    const dispatch = useDispatch();
    const handleVote = (id: number) => dispatch(vote(id))
    const handleHide = (id: number) => dispatch(hide(id))

    return (
        <div>
            {data.map((news: any) => <Row news={news} handleVote={handleVote} handleHide={handleHide} />)}
        </div>
    )
}

const Pagination = () => {
    const { page, nbPages }: any = useSelector((s: any) => ({ page: s.news.page, nbPages: s.news.nbPages }))
    return (
        <div>
            {page > 0 && <a href={`?page=${page - 1}`}>Previous</a>}
            {(nbPages - page - 1) > 0 && <a href={`?page=${page + 1}`}>Next</a>}
        </div>
    )
}



export default () => {
    const dispatch = useDispatch();
    const data: [] = useSelector(selector)
    useEffect(() => {
        const page = (new URLSearchParams(window.location.search)).get('page')
        dispatch(fetchFeed(page))
        dispatch(fetchUserActions())
    }, [])

    return (<div>
        <Header />
        <Table data={data} />
        <Pagination />
        <Chart data={data} />
    </div>)
}