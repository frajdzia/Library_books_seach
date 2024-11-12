import React from 'react';

const BookList = ({books, handleAddToFavourites}) =>{
    return(
        <ul>
            {books.map((book)=> (
                <li key ={book.title}>
                    {book.title} by {book.author}
                    <button onClick = {() => handleAddToFavourites(book)}>Add to Favourites</button>
                </li>
            ))}
        </ul>
    );
};

export default BookList;