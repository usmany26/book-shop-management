import React , {useState, useEffect, useCallback } from 'react'
import BookForm from './BookForm';
import BooksList from './BooksList';
import Search from './Search';

const BookShop = () => {

    const [booksData , setBooksData] = useState([]);


    // useEffect(() => {
    //     fetch('https://book-shop-cbc94-default-rtdb.firebaseio.com/books.json')
    //     .then(response => {
    //         return response.json();
    //     }).then(responseData => {
    //         const loadedBooks = [];
    //         for(const key in responseData){
    //             loadedBooks.push({
    //                 id: key,
    //                 title: responseData[key].title,
    //                 amount: responseData[key].amount,
    //                 ISBN: responseData[key].ISBN,
    //                 price: responseData[key].price
    //             });
    //         }
    //         setBooksData(loadedBooks);
    //     })
    // }, [])


    const addBookHandler = book => {
        fetch('https://book-shop-cbc94-default-rtdb.firebaseio.com/books.json', {
            method: 'POST',
            body: JSON.stringify(book),
            headers: { 'Content-Type' : 'application.json' }
        }).then(response => {
            return response.json();
        }).then(responseData => {
            setBooksData(prevBooksData => [{id: responseData.name, ...book}, ...prevBooksData]
            )
        })
    }

    const onDeleteHandler = (bookId) => {
        fetch( `https://book-shop-cbc94-default-rtdb.firebaseio.com/books/${bookId}.json`, {
            method: 'DELETE',
        }).then(response => {
            setBooksData(prevBooksData => {
                prevBooksData.filter(book => book.id !== bookId);
            });
        });
    }

    const onLoadBooksHandler = useCallback( (loadedBooks) => {
        setBooksData(loadedBooks)
    }, []);

    return (
        <div>
            <BookForm onAdd={addBookHandler}/>
            <Search onLoadBooks={onLoadBooksHandler}/>
            <BooksList booksList = {booksData} onDelete={onDeleteHandler}/>
        </div>
    )
}

export default BookShop;
