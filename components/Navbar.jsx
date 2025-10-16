import React from 'react'
import './Navbar.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Navbar = () => {
     const settings = {
    dots: false,
    fade: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    // <div>
    <div className='bg-pink-600 h-[10vh] md:h-[20vh]'>
        <div className="slider-container">
      <Slider {...settings}>
        <div 
        className='flex items-center justify-center border-2 border-yellow-300 p-3.5'
        >
            <div className="flex items-center justify-center h-[100%] bg-red-600 w-[100%]">
                <h1 className="text-6xl sm:text-6xl md:text-8xl text-blue-600 font-bold ">
                    PERCIVAL
                </h1>
            </div>
        </div>
        <div 
            className='flex items-center justify-center border-2 border-yellow-300 p-3.5'
        >
            <div className="flex items-center justify-center h-[100%] bg-blue-600 w-[100%]">
                <h1 className="text-6xl sm:text-6xl md:text-8xl text-red-600 font-thin ">
                    Percival
                </h1>
            </div>
        </div>
        {/* <div>
            <div className="flex items-center justify-center h-4/4 bg-red-600 w-[100%]">
                <h1 className="text-6xl sm:text-6xl md:text-8xl text-yellow-300 font-bold ">
                    Percival
                </h1>
            </div>
        </div> */}
        {/* <div>
            <div className="flex items-center justify-center h-4/4 bg-blue-600 w-[100%]">
                <h1 className="text-6xl sm:text-6xl md:text-8xl text-red-600 font-bold ">
                    Percival
                </h1>
            </div>
        </div> */}
      </Slider>
    </div>
    </div>
    // </div>
  )
}

export default Navbar