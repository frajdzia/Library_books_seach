import React from 'react';
import Card from './Card';

const BookList = ({books, handleAddToFavourites, favourites}) => {
    
    const handleDragStart = (e, book) => {
        e.dataTransfer.setData('book', JSON.stringify(book));
    };
    
    return(
        <>
        <h2>Book List</h2>
        <div className='card-container'>
            {books.map((book)=>{
                const isFavourite = favourites.some((favourite) => favourite.title == book.title);
                return(
                    <div key={book.title} className='book-item'>
                        <div draggable onDragStart={(e) => handleDragStart(e, book)} className = "drag-handle">
                        <Card book={book} />
                        </div>
                        <button onClick ={()=> handleAddToFavourites(book)} disabled={isFavourite}>
                        {isFavourite ? "Already in Favs" : "Add to Favs"}
                        </button>
                    </div>
                );
            })}
        </div>
        </>
    );
};

export default BookList;