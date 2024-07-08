import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl '>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
          <Grid item xs={6}>
            <div className='flex cursor-pointer '>
              <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://i.pinimg.com/736x/0c/7f/91/0c7f91d5552ee4b454636538b692e673.jpg" alt="" />
              <div className='ml-5 space-y-2'>
                  <p className='mb-2'>Men Slim Mid Rise Black Jeans</p>
                  <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                  <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
              </div>
            </div>

          </Grid>
          <Grid item xs={2}>
            <p>₹1099</p>
          </Grid>
          <Grid item xs={4}>
            {true && <div>
              <p>
              <AdjustIcon className='text-green-600' sx={{width:"15px", height:"15px" }}/>
              <span>Deliverd on March 03</span>

            </p>
            <p className='text-xs'>
              Your item has been delivered
            </p>
              </div>}
            {false && <p>
              <span>Expected Delivery on March 03</span>
            </p>}
          </Grid>


        </Grid>
    </div>
  )
}

export default OrderCard
