import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { savePayment } from '../actions/cartAction';
import CheckoutSteps from '../components/CheckoutSteps';

function PaymentScreen(props) {

    const [paymentMethod, setPaymentMethod] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePayment({ paymentMethod }));
        props.history.push('placeorder');

    }
    return <div>
        <CheckoutSteps step1 step2 step3 ></CheckoutSteps>
        <Helmet>
            <title>Khanjan Store | Payment</title>
        </Helmet>
        <div className="form">
            <form onSubmit={submitHandler} >
                <ul className="form-container">

                    <li>
                        <h2>Payment</h2>
                    </li>
                    <li>
                        <div>
                            <input type="radio" name="paymentMethod" id="paymentMethod" value="Pay On Delivery" onChange={(e) => setPaymentMethod(e.target.value)}>
                            </input>
                            <label htmlFor="paymentMethod">Cash on Delivery</label>
                        </div>
                        <div>
                            <input type="radio" name="paymentMethod" id="paymentMethod" value="Pay On Delivery" onChange={(e) => setPaymentMethod(e.target.value)}>
                            </input>
                            <label htmlFor="paymentMethod">Card on Delivery</label>
                        </div>
                    </li>
                    <li>
                        <button type="submit" className="button primary">Continue</button>
                    </li>

                </ul>
            </form>
        </div>
    </div>

}
export default PaymentScreen;