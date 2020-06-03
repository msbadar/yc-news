import React from "react";

export default ({
    page,
    nbPages
}: {
    page: number,
    nbPages: number
}) => {
    return (
        <div className="pagination">
            {page > 0 && <a href={`?page=${page - 1}`}>Previous</a>}
            {(nbPages - page - 1) > 0 && <a href={`?page=${page + 1}`}>Next</a>}
        </div>
    )
}