import React from 'react';

const Header = ({navigateTo, PAGE_CART, item, page, PAGE_BOOKS, count}) => {

    const getCartTotal = () => {
            return item.reduce(
                (sum, {quantity}) => sum + quantity, 0);
    };

    return (
        <header className="sticky-top">
            <p className="cart mt-3 btn btn-success" onClick={()=>navigateTo(PAGE_CART)}><span>Prekių krepšelis:({getCartTotal()})</span></p>
            {page === PAGE_CART && <p className="back mt-3 btn btn-warning" onClick={()=>navigateTo(PAGE_BOOKS)}>Grįžti į pagrindinį</p>}
        </header>
    )
}
export default Header;