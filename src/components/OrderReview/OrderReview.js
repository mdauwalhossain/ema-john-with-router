import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart] = useCart(products);
    return (
        <div>
            <h2>Display products:{products.length}</h2>
            <h3>{cart.length}</h3>
            <h2>Order Review</h2>
        </div>
    );
};

export default OrderReview;