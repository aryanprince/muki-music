import React from 'react'

export default function Cart({ cart, changeQuantity }) {
    const total = () => {
        let price = 0
        cart.forEach((item) => {
            price += +((item.salePrice || item.originalPrice) * item.quantity)
        })
        return price
    }

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="cart__title">Cart</h2>
                        </div>

                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__book">Book</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__total">Price</span>
                            </div>

                            {/* ACTUAL CART */}
                            <div className="cart__body">
                                {cart.map((book) => {
                                    return (
                                        <div className="cart__item">
                                            {/* CART BOOK DETAILS */}
                                            <div className="cart__book">
                                                <img src={book.url} alt="" className="cart__book--img" />
                                                <div className="cart__book--info">
                                                    <span className="cart__book--title">{book.title}</span>
                                                    <span className="cart__book--price">${(book.salePrice || book.originalPrice).toFixed(2)}</span>
                                                    <button className="cart__book--remove">Remove</button>
                                                </div>
                                            </div>
                                            {/* CART QUANTITY (DYNAMIC) */}
                                            <div className="cart__quantity">
                                                <input
                                                    type="number"
                                                    min={0}
                                                    max={99}
                                                    className="cart__input"
                                                    value={book.quantity}
                                                    onChange={(event) => changeQuantity(book, event.target.value)}
                                                />
                                            </div>
                                            {/* TOTAL = BOOK * QUANTITY */}
                                            <div className="cart__total">${((book.salePrice || book.originalPrice) * book.quantity).toFixed(2)}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* CART TOTAL ON BOTTOM RIGHT */}
                        <div className="total">
                            <div className="total__item total__sub-total">
                                <span>Subtotal</span>
                                <span>${(total() * 0.9).toFixed(2)}</span>
                            </div>
                            <div className="total__item total__tax">
                                <span>Tax</span>
                                <span>${(total() * 0.1).toFixed(2)}</span>
                            </div>
                            <div className="total__item total__price">
                                <span>Price</span>
                                <span>${total().toFixed(2)}</span>
                            </div>
                            <button className="btn btn__checkout no-cursor" onClick={() => alert("Haven't gotten around to doing this")}>
                                Proceed to checkout
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}