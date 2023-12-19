import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../Redux/Slice/CartSlice';
const Product = ({ products }) => {
    const cartItems = useSelector((state) => state.cart);
    const localstorage = JSON.parse(localStorage.getItem('itmes'))
    console.log("Product list", localstorage);
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        console.log('click', product);
        dispatch(addToCart(product));
    };
    const handleRemoveToCart = (product) => {

        dispatch(removeFromCart(product))
    }


    return (
        <>
            {products.map((product, index) => (

                <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{product.name}</div>
                        <p className="text-gray-700 text-base">${product.price}</p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        {
                            <>

                                {localstorage?.some((i) => i.id === product.id) && (
                                    <button
                                        onClick={() => handleRemoveToCart(product.id)}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                    >
                                        Remove
                                    </button>
                                )}

                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                >
                                    Add to Cart
                                </button>
                            </>


                        }

                    </div>
                </div >
            ))
            }
        </>

    )
}

export default Product