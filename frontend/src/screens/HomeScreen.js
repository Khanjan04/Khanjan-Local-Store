import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(props) {

    const productList = useSelector(state=> state.productList);
    const {products, loading, error} = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        return () => {
            //
        };
    }, []);

    return loading? <div>Loading...</div>:
        error? <div>{error}</div>:
        <div>
            <section>
                <div id="slider">
                    <figure>
                        <Link><img src="images/c1.png"></img></Link>
                        <Link><img src="images/c2.png"></img></Link>
                        <Link><img src="images/c3.png"></img></Link>
                        <Link><img src="images/c2.png"></img></Link>
                        <Link><img src="images/c1.png"></img></Link>
                    </figure>
                </div>
            </section>
            <ul className="products">
            {
                products.map(product =>
                    <li key={product._id}> 
                        <div className="product">
                            <Link to={'/product/' + product._id}><img className="product-image" src={product.image} alt="product"/></Link>
                            <div className="product-name">
                            <Link to={'/product/' + product._id}>{product.name}</Link>
                            </div>
                            <div className="product-brand">{product.brand}</div>
                            <div className="product-price">Rs {product.price}</div> 
                        </div>
                    </li> )
            }
            </ul>
            <nav id="top-footer">
                <div className="to-top">
                    <a href="/">Back to Top  ⬆</a>
                </div>
            </nav>
        </div>
}
export default HomeScreen;