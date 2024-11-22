import SearchBar from "./components/SearchBar.js";
import BookList from "./components/BookList.js";
import Cart from "./components/Cart.js";
import React, {useEffect, useState} from 'react';
import FavouriteList from "./components/FavouriteList.js";
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [favourites, setFavourites] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect (() =>{
    //fetch data from books.json
    fetch('/books.json')
    .then((response) => response.json())
    .then((data) => setBooks(data.books))
    .catch((error) => console.error('Error catching data: ', error));
  },[]);

  const handleSearch = (term) =>{
    setSearchTerm(term);
  }

  const filteredBooks = books.filter((book)=>
  book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToFavourites = (book) => {
    if(!favourites.some((favourite) => favourite.title == book.title)){
    setFavourites([...favourites, book]);}
  };

  useEffect (() => {
    //save fav to local
      localStorage.setItem('favourites', JSON.stringify(favourites));
  },[favourites]);

  //clear fav
  const handleClearFavourites = () =>{
    setFavourites ([]);
    //clear the state
    localStorage.removeItem('favourites'); //clear local storage
  };

  useEffect(() =>{
//load fav 
const savedFavourites = localStorage.getItem('favourites');
if(savedFavourites){
  setFavourites(JSON.parse(savedFavourites));
}
  });

  return (
    <div className = "app">
      <div className = "searchbar-container">
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div className = "main-container">
        <div className = "left-section">
          <FavouriteList favourites={favourites} handleClearFavourites={handleClearFavourites}/>
          <BookList books={filteredBooks} handleAddToFavourites={handleAddToFavourites} favourites={favourites} />
        </div>
        <div className = "right-section">
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </div>
      </div>
    </div>
  );
}

export default App;