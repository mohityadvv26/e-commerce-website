import React from 'react'
import { mainCaroselData } from './MainCaroselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const MainCarosel = () => {

    const items = mainCaroselData.map((item) => <img className="cursor-pointer" role='presentation' src={item.image} alt="" />)

  return (
    <div>
        <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
        />
    </div>
  )
}

export default MainCarosel;
