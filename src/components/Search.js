import React , {useState , useEffect} from 'react'
import './Search.css'


const Search = (props) => {
    const {onLoadBooks} = props
    const [filterbooks , setFilterBooks] = useState(''); 

    useEffect(() => {
        const query = filterbooks.length === 0 ? '' : `?orderBy"ISBN"&equalTo="${filterbooks}"`
        fetch('https://book-shop-cbc94-default-rtdb.firebaseio.com/books.json' + query)
        .then(response => {
            return response.json();
        }).then(responseData => {
            const loadedBooks = [];
            for(const key in responseData){
                loadedBooks.push({
                    id: key,
                    title: responseData[key].title,
                    amount: responseData[key].amount,
                    ISBN: responseData[key].ISBN,
                    price: responseData[key].price
                });
            }
            onLoadBooks(loadedBooks)
        })
    }, [filterbooks,onLoadBooks])

    return (
        <div className='search'>
            <input type="text" value={filterbooks} placeholder='Enter ISBN to search' 
            onChange={ event => setFilterBooks(event.target.value) }/>
        </div>
    )
}

export default Search
