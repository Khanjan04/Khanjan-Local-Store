import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
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

  const userSignin = useSelector(state=>state.userSignin);
  const {userInfo} = userSignin;
  
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
<BrowserRouter>

    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <Link to="/">Khanjan</Link>
            </div>
            <div className="header-links">
                <a href="cart">Cart</a>
                {
                    userInfo ? <Link to="/profile">{userInfo.name}</Link>:
                    <Link to="/signin">Signin</Link>
                }
            </div>
        </header>
        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
                <li>
                    <a href="">Pants</a>
                </li>
                <li>
                    <a href="">Shirts</a>
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
            All rights are reserved.
        </footer>
    </div>
    </BrowserRouter>
  );
}
export default App;
