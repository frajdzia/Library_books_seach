import React from "react";

const Card = ({book}) => {
    return(
        <div>
            <img src = {`/${book.url}`}
            alt = {book.title}/>
            <div>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p>{book.price}</p>
            </div>
        </div>
    );
};

export default Card;