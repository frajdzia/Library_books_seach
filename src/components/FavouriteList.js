import React from "react";
import Card from './Card';

const FavouriteList = ({favourites, handleClearFavourites}) => {
    return(
        <div>
            <h2>Favourite books
                <button onClick = {handleClearFavourites}>Erase Favourite List</button>
                
            </h2>
            <div>
                {favourites.map((book)=> (
                    <Card key={book.title} book = {book}/>
                ))}
            </div>
            <hr />
        </div>
    )
}
export default FavouriteList;