import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import {useDispatch, useSelector} from 'react-redux';
import { saveShipping } from '../actions/cartAction';
import CheckoutSteps from '../components/CheckoutSteps';

function ShippingScreen(props) {
    
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    
    const dispatch = useDispatch();

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(saveShipping({address, city, postalCode, country}));
        props.history.push('payment');

    }
    return <div>
        <CheckoutSteps step1 step2 ></CheckoutSteps>
        <Helmet>
                <title>Khanjan Store | Shipping</title>
            </Helmet>
        <div className="form">
        <form onSubmit={submitHandler} >
            <ul className="form-container">
                <li>
                    <h2>Shipping</h2>
                </li>
                <li>
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="postalCode">Postal Code</label>
                    <input type="number" name="postalCode" id="postalCode" onChange={(e) => setPostalCode(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor="country">Country</label>
                    <input list="countrys" name="country" id="country" onChange={(e) => setCountry(e.target.value)}>
                    </input>
                    <datalist id="countrys">
                        <option value="India"></option>
                        <option value="America"></option>
                        <option value="Russia"></option>
                        <option value="Germany"></option>
                        <option value="Italy"></option>
                        <option value="France"></option>
                        <option value="UK"></option>
                        <option value="Australia"></option>
                    </datalist>
                </li>
                <li>
                    <button type="submit" className="button primary">Continue</button>
                </li>
            </ul>
        </form>
        </div>
    </div>
    
}
export default ShippingScreen;