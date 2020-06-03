import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
import vote from "../actions/vote"
import hide from "../actions/hide"
import fetchFeed from "../actions/fetch-feed";
import fetchUserActions from "../actions/fetch-user-actions";
import Chart from "../components/chart";
import { useSelector } from "react-redux";
import getResultsSelector from "../selectors/get-results"
import getPaginationSelector from "../selectors/get-pagination"
import Table from "../components/table";
import Header from "../components/header";
import Pagination from "../components/pagination";

export default () => {
    
    const dispatch = useDispatch();
    const data: [] = useSelector(getResultsSelector);
    const { page, nbPages }: any = useSelector(getPaginationSelector)

    useEffect(() => {
        const page = (new URLSearchParams(window.location.search)).get('page')
        dispatch(fetchFeed(page))
        dispatch(fetchUserActions())
    }, [dispatch])


    const handleVote = (id: number) => dispatch(vote(id))
    const handleHide = (id: number) => dispatch(hide(id))

    return (<div>
        <Header />
        <Table
            data={data}
            handleVote={handleVote}
            handleHide={handleHide}
        />
        <Pagination
            page={page}
            nbPages={nbPages}
        />
        <Chart data={data} />
    </div>)
}