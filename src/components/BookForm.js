import React, {useState} from 'react'
import './BookForm.css'

const BookForm = (props) => {

   const [title, setTitle] = useState('');
   const [amount, setAmount] = useState('');
   const [ISBN, setISBN] = useState('');
   const [price, setPrice] = useState('');

   const onSubmitHandler = (e) => {
      e.preventDefault();
      props.onAdd({
          title: title,
          amount: amount,
          ISBN: ISBN,
          price: price
      });
      setTitle('');
      setAmount('');
      setISBN('');
      setPrice('');

   }

    return (
    <div className='bookform'>
        <h2>ADD BOOK</h2>
        <form className='form' onSubmit={onSubmitHandler}>
              <label>Title</label>
              <input type="text" value ={title} onChange={ event => setTitle(event.target.value) }/>
              <label>Amount</label>
              <input type="text" value ={amount} onChange={ event => setAmount(event.target.value) }/>
              <label>ISBN:</label>
              <input type="text" value ={ISBN} onChange={ event => setISBN(event.target.value) }/>
              <label >Price</label>
              <input type="text" value ={price} onChange={ event => setPrice(event.target.value) }/>
             <button type='submit' className='submit__btn'>
                Add Book
             </button>
        </form>
    </div>
    )
}

export default BookForm;
