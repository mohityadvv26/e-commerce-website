import React from 'react';
import CartItem from './CartItem';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate("/checkout?step=2");   
    }
    return (
        <div className="lg:grid grid-cols-3 gap-8 lg:px-16">
            <div className="col-span-2">
                {[1, 1, 1, 1].map((item) => (
                    <CartItem />
                ))}
            </div>
            <div className="col-span-1 px-5 sticky top-0 h-screen mt-5 lg:mt-0">
                <div className="border p-5">
                    <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
                    <hr />
                    <div className="space-y-3 font-semibold mb-10">
                        <div className="flex justify-between pt-3 text-black">
                            <span>Price</span>
                            <span>₹4799</span>
                        </div>
                        <div className="flex justify-between pt-3 ">
                            <span>Discount</span>
                            <span className="text-green-600">-₹3521</span>
                        </div>
                        <div className="flex justify-between pt-3 text-black">
                            <span>Delivery Charge</span>
                            <span className="text-green-600">FREE</span>
                        </div>
                        <div className="flex justify-between pt-3 text-black">
                            <span>Total Amount</span>
                            <span className="text-green-600">₹1278</span>
                        </div>
                    </div>
                    <Button onClick={handleCheckout} variant="contained" className="w-full mt-3" sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}>
                        Checkout
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
