import React from "react";

const Card = ({book}) => {
    return(
        <div className = "card">
            <img src = {book.url}
            alt = {book.title} className = "book-cover"/>
            <div className="card-body">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p>{book.price}</p>
            </div>
        </div>
    );
};

export default Card;