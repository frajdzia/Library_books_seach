import React from "react";

const FavouriteList = ({favourites, handleClearFavourites}) => {
    return(
        <div>
            <h2>Favourite books
                <button onClick = {handleClearFavourites}>Erase Favourite List</button>
                
            </h2>
            <ul>
                {favourites.map((book)=> (
                    <li key={book.title}>
                        {book.title} by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default FavouriteList;