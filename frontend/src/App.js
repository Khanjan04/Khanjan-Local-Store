import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import './index.css';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import ProductsScreen from './screens/ProductsScreen';
import RegisterScreen from './screens/RegisterScreen';
import SigninScreen from './screens/SigninScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

function App() {

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    }
    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
    }

    return (
        <BrowserRouter>
            <div className="grid-container">
            <Helmet>
                <title>Khanjan Store | Home</title>
            </Helmet>
                <header>
                    <div className="nav">
                        <div className="nav_left">
                            <div className="nav_logo">
                                <button className="option" onClick={openMenu}>
                                    &#9776;
                                </button>
                                <Link to="/">Khanjan Store</Link>
                            </div>
                        </div>
                        <div className="nav_right">
                            <div className="header-links">
                                <a href="cart">Cart</a>
                                {
                                    userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                                        <Link to="/signin">Sign In</Link>
                                }
                            </div>
                        </div>
                        <div className="nav_fill">
                            
                        </div>
                    </div>
                    <nav id="nav-main">
                        <div className="nav_cat">
                            <ul>
                                <li>
                                    <div className="category" href="/">Shopping Categories:- </div>
                                </li>
                                <li>
                                    <a href="/">Pant</a>
                                </li>
                                <li>
                                    <a href="/">Shirt</a>
                                </li>
                                <li>
                                    <a href="/">Frock</a>
                                </li>
                                <li>
                                    <a href="/">T-Shirt</a>
                                </li>
                                <li>
                                    <a href="/">Blazzer</a>
                                </li>
                                <li>
                                    <a href="/">Capri</a>
                                </li>
                                <li>
                                    <a href="/">Hoodie</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <aside className="sidebar">
                    <h3>Shopping Categories</h3>
                    <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                    <ul className="sidebar-list">
                        <li>
                            <a href="/">Pant</a>
                        </li>
                        <li>
                            <a href="/">Shirt</a>
                        </li>
                        <li>
                            <a href="/">Frock</a>
                        </li>
                        <li>
                            <a href="/">T-Shirt</a>
                        </li>
                        <li>
                            <a href="/">Blazzer</a>
                        </li>
                        <li>
                            <a href="/">Capri</a>
                        </li>
                        <li>
                            <a href="/">Hoodie</a>
                        </li>
                    </ul>
                </aside>
                <main className="main">
                    <div className="content">
                        <Route path="/products" component={ProductsScreen} />
                        <Route path="/shipping" component={ShippingScreen} />
                        <Route path="/payment" component={PaymentScreen} />
                        <Route path="/placeorder" component={PlaceOrderScreen} />
                        <Route path="/signin" component={SigninScreen} />
                        <Route path="/register" component={RegisterScreen} />
                        <Route path="/product/:id" component={ProductScreen} />
                        <Route path="/cart/:id?" component={CartScreen} />
                        <Route path="/" exact={true} component={HomeScreen} />
                    </div>
                </main>
                <footer className="footer">
                    All rights are reserved. Made by Khanjan Varma.
        </footer>
            </div>
        </BrowserRouter>
    );
}
export default App;
