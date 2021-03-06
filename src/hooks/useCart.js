import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = products =>{
    const [cart, serCart]= useState([]);
    useEffect( () =>{
        if(products.length){
            const saveCart = getStoredCart();
            const storedCart = [];
            for(const key in saveCart){
                const addedProduct = products.find(product => product.key === key);
                if(addedProduct){
                    const quantity = saveCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push (addedProduct);
                }
            }
            serCart(storedCart);
        }

    },[products])
    return [cart, serCart];
}
export default useCart;