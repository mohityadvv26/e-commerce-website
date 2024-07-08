import React from 'react'
import "./Productcard.css"
import { useNavigate } from 'react-router-dom'

const Productcard = ({ product }) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/product/${5}`)} className="productcard w-[15rem] m-3 transition-all cursor-pointer">
            <div className="h-[20rem] ">
                <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt="" />
            </div>
            <div className="textpart bg-white p-3">
                <div>
                    <p className="font-bold opacity-60">{product.brand}</p>
                    <p>{product.title}</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <p className="font-semibold">{product.discountedPrice}</p>
                    <p className="line-through opacity-50">{product.price}</p>
                    <p className="text-green-600 font-semibold">{product.discountPersent}% OFF  </p>
                </div>
            </div>
        </div>
    )
}

export default Productcard
