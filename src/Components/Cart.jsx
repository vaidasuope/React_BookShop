import React from 'react';

const Cart = ({item, removeFromCart, deleteCart,addToCart,removeOneItem,increaseQuantity}) => {

    const getTotalValue = () => {
        return item.reduce((sum, {price,quantity}) => sum + price*quantity, 0).toFixed(2);
    };

    return (
        <div className="booksCart">
            <h1 className="mt-3">Pirkinų krepšelis</h1>
            <table className="table">
                {item.length>0 &&
                    <tr>
                        <th></th>
                        <th className="author"><p>Prekė</p></th>
                        <th><p>Kiekis</p></th>
                        <th><p>Kaina</p></th>
                    </tr>
                }
                {item.map((book, index) => (
                    <tr key={index}>
                        <td>
                        <img id="cartImg" className="mr-3" src={book.image} alt={book.title}/>
                        </td>
                        <td>
                        <div>
                            <h6>{book.author}</h6>
                            <p>{book.title}</p>
                        </div>
                        </td>
                        <td>
                        <div className="cartButton">
                            <button className="btn btn-danger" onClick={()=>removeFromCart(book)}>-</button>
                            <p>{book.quantity} vnt.</p>
                            <button className="btn btn-success" onClick={()=>increaseQuantity(book)}>+</button>
                        </div>
                        </td>
                        <td>
                        <h6>{book.price} €</h6>
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={()=>removeOneItem(book)}>Ištrinti</button>
                        </td>
                    </tr>

                ))}
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th><p>Viso: {getTotalValue()} €</p></th>
                </tr>
            </table>
            {item.length>0 && <button className="btn btn-danger button2" onClick={deleteCart}>Išvalyti krepšelį</button>}
        </div>
    );
};

export default Cart;