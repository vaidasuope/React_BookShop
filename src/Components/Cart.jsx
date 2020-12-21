import React from 'react';

const Cart = ({item, setItem, removeFromCart, deleteCart,addToCart,removeOneItem,increaseQuantity}) => {

    const getTotalValue = () => {
        return item.reduce((sum, {price,quantity}) => sum + price*quantity, 0).toFixed(2);
    };

    const checkOut = () => {
        setItem([]);
    };

    return (
        <div className="booksCart">
            <h1 className="mt-3">Pirkinų krepšelis</h1>
            <table className="table">
                <tbody>
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
                        <h6>{(book.price*book.quantity).toFixed(2)} €</h6>
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
                    {item.length>0 && <th><p>Viso: {getTotalValue()} €</p></th>}
                    {item.length>0 && <th><button className="btn btn-success button2" onClick={checkOut}>Pirkti</button></th>}
                </tr>
                </tbody>
            </table>
            {item.length>0 && <button className="btn btn-danger button2" onClick={deleteCart}>Išvalyti krepšelį</button>}
        </div>
    );
};

export default Cart;