import React from "react";
import "./One.css";
import smile from "../src/assets/smile.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from "../components/Fade";

const One = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    initialSlide: 0,
      appendDots: dots => (
      <div
        style={{
            display:'flex',
        //   backgroundColor: "green",
          color:'red',
          height:'20px',
          marginBottom:'3px',
          alignItems:'center',
          justifyContent:'center'
        }}
      >
        <ul style={{ marginTop: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          height:'15px',
          color: "yellow",
        //   backgroundColor:'blue',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          fontSize:'40px'
        }}
      >
        {'•'}
        {/* {'*'} */}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
       {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    
  };
  return (
    <div>
      <div className="flex items-center justify-center w-full h-[10vh] md:h-[15vh] bg-green-600 fixed z-999">
        <h1 className="text-5xl md:text-8xl font-bold"> TAIL WIND CSS</h1>
      </div>
      <div className="flex items-center justify-center w-full h-[10vh] md:h-[30vh] bg-green-600"></div>
      {/* Top Section */}
      <div className="flex flex-col md:flex-row h-auto md:h-screen bg-purple-900 gap-4 items-center px-4 py-6">
        {/* Card 1 */}
        <div className="flex items-center justify-center h-64 md:h-3/4 bg-green-400 w-full md:w-1/3 rounded-3xl">
          <div className="h-32 w-32 md:h-1/2 md:w-1/2 bg-amber-500 rounded-full border-8 overflow-hidden">
            <img
              className="h-full w-full object-cover rounded-full"
              src={smile}
              alt="smile"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center justify-center h-64 md:h-3/4 bg-green-400 w-full md:w-1/3 rounded-3xl">
          <div className="h-32 w-32 md:h-1/2 md:w-1/2 bg-amber-500 rounded-full border-4 border-red-600 overflow-hidden">
            <img
              className="h-full w-full object-cover rounded-full"
              src={smile}
              alt="smile"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center justify-center h-64 md:h-3/4 bg-green-400 w-full md:w-1/3 rounded-3xl">
          <div className="h-32 w-32 md:h-1/2 md:w-1/2 bg-amber-500 rounded-full border-8 overflow-hidden">
            <img
              className="h-full w-full object-cover rounded-full"
              src={smile}
              alt="smile"
            />
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex items-center justify-center h-64 bg-red-600">
        <h1 className="text-4xl sm:text-6xl md:text-8xl text-blue-600 font-bold hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
          Good Morning
        </h1>
      </div>

      {/* Bottom Section */}
      <div className="flex h-64 md:h-96 bg-[#f0f]">
        {/* Content can be added here */}
      </div>
      <div className="flex flex-col md:flex-row h-260 md:h-screen items-center justify-around bg-amber-600 gap-4 p-4">
        <div className="h-90 md:h-3/4 w-full md:w-1/3 bg-blue-700"></div>
        <div className="h-90 md:h-3/4 w-full md:w-1/3 bg-blue-700"></div>
        <div className="h-90 md:h-3/4 w-full md:w-1/3 bg-blue-700"></div>
      </div>
      <div className="flex flex-col md:flex-row md:h-screen items-center justify-center bg-pink-600 gap-2.5 pt-2.5 pb-2.5">
        <div className="h-100 w-[90%] md:h-4/5 md:w-3/5 bg-yellow-300"></div>
        <div className="h-100 w-[90%] md:h-4/5 md:w-3/5 bg-yellow-300"></div>
        <div className="h-100 w-[90%] md:h-4/5 md:w-3/5 bg-yellow-300"></div>
        <div className="h-100 w-[90%] md:h-4/5 md:w-3/5 bg-yellow-300"></div>
      </div>

      <div className="">
        <div className="h-fit bg-orange-600 pt-4 pb-4 pl-[5%] pr-[5%]">
          <Slider {...settings}>
            <div className="w-4/4 bg-black">
              <div className="flex items-center justify-center h-100 w-4/4 md:h-100  md:w-4/4 bg-red-600">
                <h1 className="text-6xl text-yellow-300 font-bold">Hello</h1>
              </div>
            </div>
            <div className="w-4/4 bg-black">
              <div className="flex items-center justify-center h-100 w-4/4 md:h-100  md:w-4/4 bg-yellow-300 ">
                <h1 className="text-6xl text-red-600 font-bold">Hola</h1>
              </div>
            </div>
            <div className="w-4/4 bg-black">
              <div className="flex items-center justify-center h-100 w-4/4 md:h-100  md:w-4/4 bg-red-600 ">
                <h1 className="text-6xl text-yellow-300 font-bold">Aloha</h1>
              </div>
            </div>
            <div className="w-4/4 bg-black">
              <div className="flex items-center justify-center h-100 w-4/4 md:h-100  md:w-4/4 bg-yellow-300 ">
                <h1 className="text-6xl text-red-600 font-bold">Hola</h1>
              </div>
            </div>
            <div className="w-4/4 bg-black">
              <div className="flex items-center justify-center h-100 w-4/4 md:h-100  md:w-4/4 bg-red-600">
                <h1 className="text-6xl text-yellow-300 font-bold">Aloha</h1>
              </div>
            </div>
            <div className="w-4/4 bg-black">
              <div className="flex items-center justify-center h-100 w-4/4 md:h-100  md:w-4/4 bg-yellow-300 m">
                <h1 className="text-6xl text-red-600 font-bold">Hola</h1>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="flex items-center justify-center h-64 bg-purple-600">
        <h1 className="text-4xl sm:text-6xl md:text-8xl text-yellow-300 font-bold hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
          Howdy
        </h1>
      </div>
      <Fade/>
    </div>
  );
};

export default One;
