import React from 'react'

const HomeSectionCard = ({product}) => {
    return (
        <div className="cursor-pointer flex flex-col bg-white items-center rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
            <div className="h-[13rem] w-[10rem]">
                <img className="w-full h-full object-cover object-top" src={product.imageUrl} alt="" />

            </div>
            <div className="p-4 ">
                <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
                <p className="mt-2 text-sm text-gray-500">{product.title}</p>
            </div>
        </div>
    )
}

export default HomeSectionCard
