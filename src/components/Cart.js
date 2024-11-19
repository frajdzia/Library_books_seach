import React from "react";

const Cart = ({cartItems, setCartItems}) =>{
    const [total, setTotal] = useState(0);
    const handleDrop = (e) =>{
        e.preventDefault();
        const book = JSON.parse(e.dataTransfer.getData('book'));
        const updatedCart = [...cartItems];
        const index = updatedCart.findIndex(item =>item.title ==book.title);
        if (index === -1){
            updatedCart.push({...book, quantity:1});
        }
        else{
            updatedCart[index].quantity +=1
        }
        setCartItems(updatedCart);
        updateTotal(updatedCart);
    };
    const handleDragOver = (e) => {
        e.preventDefault();
    }
    const updateTotal = (items) => {
        const totalPrice = items.reduce((acc, item))
    }
};

export default Cart;