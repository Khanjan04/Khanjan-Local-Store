import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartAction';
function CartScreen(props){

    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;

    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]):1;
    const dispatch = useDispatch();
    const removeFromCartHandler = (productId) =>{
        dispatch(removeFromCart(productId));
    }
    useEffect(() =>{
        if(productId){
            dispatch(addToCart(productId, qty));
        }
    }, []);

    const checkoutHandler = () =>{
        props.history.push("/signin?redirect=shipping");
    }

    return <div className="cart">
        <Helmet>
            <title>Khanjan Store | Cart</title>
        </Helmet>
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h2>
                        Shopping Cart
                    </h2>
                    <h2>
                        Price
                    </h2>
                </li>
                {
                    cartItems.length ===0? 
                    <div>
                        Cart is empty
                    </div>
                    :
                    cartItems.map( item =>
                        <li>
                            <div className="cart-image">
                            <img src={item.image} alt="product" />
                            </div>
                            <div className="cart-name">
                                <div className="product-name">
                                    <Link to={"/product/" + item.product }>
                                        {item.name}
                                    </Link>
                                </div>
                                <div className="quantity">
                                    <div className="qty">
                                        Qty:
                                    </div>
                                    <select className="value" value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                                        {[...Array(item.countInStock).keys()].map(x =>
                                           <option key={x+1} value={x+1}>{x+1}</option>  
                                        )}
                                    </select>
                                    <button className="button" type="button" onClick={() => removeFromCartHandler(item.product)} >
                                        Delete 
                                    </button>
                                </div>
                            </div>
                            <div className="cart-price">
                                Rs {item.price}
                            </div>
                        </li>
                        )
                }
            </ul>
        </div>
        <div className="cart-action">
                <h3>
                    Subtotal: Rs {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                </h3>
                <button className="button primary full-width" type="button" onClick={checkoutHandler} disabled={cartItems.length === 0}>
                    Proceed
                </button>  
        </div>
    </div>
}

export default CartScreen;