import React from "react";
import {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
} from "../Redux/Slice/CartSlice";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
    const products = useSelector((state) => state.cart.items);
    const storedItems = localStorage.getItem("itmes");
    const dispatch = useDispatch();
    // Parse the JSON string back into an object
    const cartItems = JSON.parse(storedItems);
    console.log(cartItems);
    const hendleremove = (e) => {
        dispatch(removeFromCart(e));
    };
    const hendleincrementQuantity = (e) => {
        dispatch(incrementQuantity(e));
    };
    const hendledecrementQuantity = (e) => {
        dispatch(decrementQuantity(e));
    };
    return (
        <div className="container mx-auto">
            <div class="flex mt-10 mb-5">
                <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
                    Product Details
                </h3>
                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                    Quantity
                </h3>
                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                    Price
                </h3>
                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                    Total
                </h3>
            </div>

            {cartItems?.length === 0 ? (
                <div className="text-center">
                    <h1 className="text-2xl">Your cart is empty.</h1>
                </div>
            ) : (
                cartItems?.map((item) => (
                    <>
                        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                            <div class="flex w-2/5">
                                <div class="w-20">
                                    <img class="h-24" src={item?.image} alt={item?.title} />
                                </div>
                                <div class="flex flex-col justify-between ml-4 flex-grow">
                                    <span class="font-bold text-sm">{item?.title}</span>
                                    <span class="text-red-500 text-xs">
                                        {item?.category[0].toUpperCase() + item.category.slice(1)}
                                    </span>
                                    <a
                                        onClick={() => hendleremove(item.id)}
                                        class="cursor-pointer font-semibold hover:text-red-500 text-gray-500 text-xs"
                                    >
                                        Remove
                                    </a>
                                </div>
                            </div>
                            <div class="flex justify-center w-1/5">
                                {item?.qty === 1 ? (
                                    <svg
                                        onClick={() => hendleremove(item.id)}
                                        class="fill-current cursor-pointer text-gray-600 w-3"
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                    </svg>
                                ) : (
                                    <svg
                                        onClick={() => hendledecrementQuantity(item)}
                                        class="fill-current cursor-pointer text-gray-600 w-3"
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                    </svg>
                                )}

                                <input
                                    class="mx-2 border text-center w-8"
                                    type="text"
                                    value={item.qty}
                                />

                                <svg
                                    onClick={() => hendleincrementQuantity(item)}
                                    class="cursor-pointer fill-current text-gray-600 w-3"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                </svg>
                            </div>
                            <span class="text-center w-1/5 font-semibold text-sm">
                                ${item?.price}
                            </span>
                            <span class="text-center w-1/5 font-semibold text-sm">
                                ${item?.price * item.qty}
                            </span>
                        </div>
                    </>
                ))
            )}
        </div>
    );
};

export default Cart;
