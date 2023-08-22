import React from 'react'
import './BooksList.css'

const BooksList = (props) => {

    // const onClickHandler = (bookId) => {
    //     props.onDelete(bookId)
    // }
 
    return (
        <div className='booksList'>
            <h2>Books Data</h2>
            <ul>
                { props.booksList &&  props.booksList.map(book => (
                    <li key={book.id} className='item__container' onClick={props.onDelete.bind(this, book.id)}>
                        <div className="item">{book.title}</div>
                        <div className="item">{book.amount}</div>
                        <div className="item">{book.ISBN}</div>
                        <div className="item">{book.price}</div>  
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default BooksList
