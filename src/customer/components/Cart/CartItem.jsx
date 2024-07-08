import { IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';


const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border m-3 rounded-md'>

            <div className='flex items-center'>

                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img
                        className='h-full w-full object-cover object-top'
                        src="https://asset1.cxnmarksandspencer.com/is/image/mands/SD_01_T57_9115_XB_X_EC_0?$PDP_INT_IMAGE_MOBILE_DOUBLE$"
                        alt="" />
                </div>
                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>Stone Blue Straight Fit Jeans</p>
                    <p className='opacity-70'>Size: XL,Blue</p>
                    <p className='opacity-70 mt-2'>Seller: Jhagdolia Creations</p>
                    <div className="flex space-x-5 items-center  text-gray-900 pt-3">
                        <p className="font-semibold">₹199</p>
                        <p className="opacity-50 line-through">₹211</p>
                        <p className=" text-green-600 font-semibold">5% OFF</p>
                    </div>
                </div>
            </div>

            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex item space-x-2'>
                    <IconButton sx={{color:"RGB(252, 105, 109)"}}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>3</span>
                    <IconButton sx={{color:"RGB(51, 184, 100)"}}>
                        <AddCircleOutlineIcon />
                    </IconButton>

                </div>
                <div>
                    <Button sx={{color:"RGB( 209, 0, 28)"}}>Remove</Button>
                </div>
            </div>

        </div>
    )
}

export default CartItem
