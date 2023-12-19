import React, { useEffect, useState } from 'react'
import Product from "./Product";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../Redux/Slice/CartSlice';
const Products = () => {
    const dispatch = useDispatch();

    const [product, SetProduct] = useState([]);
    const fetchall = async () => {
        const products = await axios.get(`https://fakestoreapi.com/products`);
        SetProduct(products.data);
    }

    useEffect(() => {
        fetchall();
    }, []);

    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-4 gap-4'>

                <Product products={product} />
            </div>
        </div>
    )
}

export default Products