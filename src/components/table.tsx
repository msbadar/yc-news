import React from "react";
import Row from "./row";

export default ({
    data,
    handleVote,
    handleHide
}: {
    data: [],
    handleVote: (id:number) => void,
    handleHide: (id:number) => void,
}) => {


    return (
        <div>
            {data.map((news: any) => <Row news={news} handleVote={handleVote} handleHide={handleHide} />)}
        </div>
    )
}
