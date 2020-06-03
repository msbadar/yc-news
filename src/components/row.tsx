import React from "react";
import moment from "moment";

export default ({ news, handleHide, handleVote }: any) => {

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
        <div className="row">
            <div className="comments">
                <span>{num_comments}</span>
                <span className="label"> Comments</span>
            </div>
            <div className="row-data">
                <div className="points">
                    <button onClick={() => handleVote(id)}> ▲ </button>
                    <div className="points-count">{totalPoint}</div>
                    <div className="label"> points</div>
                </div>
                <div className="row-details">
                    <a className="title" href={url}>{title}</a>
                    <div className="actions">
                        {url && <a>{(new URL(url)).hostname}</a>}
                        <a>by {author}</a>
                        <a>{moment(created_at).fromNow()}</a>
                        <a onClick={() => handleHide(id)}>hide</a>
                    </div>
                </div>
            </div>

        </div>
    )
}
