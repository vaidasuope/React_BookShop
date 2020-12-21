import React from 'react';
import data from "./Data";

const Book = ({addToCart}) => {

    return (
    <div className="books">
        <h1 className="mt-3">Populiariausios knygos</h1>
        <div className="book">
            {data.map((book, index) => (
                <div className="oneBook" key={index}>
                    <h5>{book.title} ({book.year})</h5>
                    <p>{book.author}</p>
                    <img src={book.image} alt={book.title}/>
                    <h6>Kaina: {book.price} €</h6>
                    {/*<Button book={book}/>*/}
                    <button className="btn btn-success button2" onClick={()=>addToCart(book)}>Į krepšelį</button>
                </div>
            ))}
        </div>
    </div>
    )};

export default Book;