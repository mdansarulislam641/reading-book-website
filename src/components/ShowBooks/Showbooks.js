
import Book from '../Book/Book';
import './Showbooks.css';
const Showbooks = ({books,addToSecond}) => {
  return (
        <div className='book-card-container'>
            {
                books.map(book=><Book addToSecond={addToSecond} key={book.id} book={book} ></Book>)
            }
        </div>
    );
};

export default Showbooks;