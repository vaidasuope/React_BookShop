import React, {useState} from 'react';
import Book from "./Book";
import Cart from "./Cart";

const PAGE_BOOKS = 'book';
const PAGE_CART = 'cart';

const Booklist= () => {

    const [item, setItem] = useState([]);
    const [page, setPage] = useState('book');

    const addToCart = (book) => {
        let newCart = [...item];
        let itemInCart = newCart.find(
            (product) => book.title === product.title
        );
        console.log(book.title)

        if (itemInCart && itemInCart.quantity < book.remain) {
            itemInCart.quantity++;
            // alert("Prekė įdėta į krepšelį.");

        } else if (itemInCart === undefined) {
            itemInCart = {
                ...book,
                quantity: 1,
            }
            // alert("Prekė įdėta į krepšelį.");
            newCart.push(itemInCart);
        } else {
            alert(`Knygų likutis:${book.remain}`);
        }
        setItem(newCart);//{...data} padaropm nauja objekta, kad galetume istrinti po viena knyga, nes kitu atveju istrina visas tos rusies knygas
    };

    const increaseQuantity = (book) => {
        let newCart = [...item];
        let itemInCart = newCart.find(
            (product) => book.title === product.title
        );
        if (itemInCart && itemInCart.quantity<book.remain) {
            itemInCart.quantity++;
        }else{
            alert(`Knygų likutis:${book.remain}`);
        }
        setItem(newCart);
    };

    const removeFromCart = (book) => {
        let newCart = [...item];
        let itemInCart = newCart.find(
            (product) => book.title === product.title
        );
        console.log(book.title)
        if (itemInCart.quantity>1){
            itemInCart.quantity--;
            setItem(newCart.splice(itemInCart));
        } else {
            setItem(item.filter((book) => book !== itemInCart));
        }
        };

    const deleteCart = () =>{
        setItem([]);
    }
    const removeOneItem = (deleteItem) =>{
        setItem(item.filter((book) => book !== deleteItem));
    }

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    }

    const getCartTotal = () => {
        return item.reduce (
            (sum, {quantity}) => sum + quantity, 0);
    };

    return (
        <div className="bookLayout">
            <header>
                <p className="cart mt-3 btn btn-success" onClick={()=>navigateTo(PAGE_CART)}><span>Pirkinių krepšelis:</span> ({getCartTotal()})</p>
                {page === PAGE_CART && <p className="back mt-3 btn btn-warning" onClick={()=>navigateTo(PAGE_BOOKS)}>Grįžti į pagrindinį</p>}
            </header>
            {page === PAGE_BOOKS && <Book addToCart={addToCart}/>}
            {page === PAGE_CART && <Cart item={item} removeFromCart={removeFromCart} deleteCart={deleteCart} addToCart={addToCart} removeOneItem={removeOneItem} increaseQuantity={increaseQuantity}/>}
        </div>
    );
};

export default Booklist;