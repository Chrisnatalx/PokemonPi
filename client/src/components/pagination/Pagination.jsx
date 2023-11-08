import React from 'react'
import './Pagination.css'
export const Pagination = ({ prevHandler, nextHandler, currentPage }) => {
    return (
        <div className='pagination'>
            <button onClick={prevHandler} disabled={currentPage === 0 ? true : false} >Prev</button>
            <p>{currentPage}</p>
            <button onClick={nextHandler} disabled={currentPage === 9 ? true : false}>Next</button>
        </div>
    )
}
