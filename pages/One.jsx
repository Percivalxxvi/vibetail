// import React from 'react'
// import './One.css'
// import smile from '../src/assets/smile.jpg'

// const One = () => {
//   return (
//     <div>
//         <div className='flex flex-row h-screen bg-purple-900 gap-2 items-center pl-2 pr-2'>
//             <div className='flex items-center justify-center h-3/4 bg-green-400 w-1/3 rounded-4xl'>
//                 <div className='h-1/2 w-1/2 bg-amber-500 rounded-full border-8'>
//                     <img className='h-full w-full rounded-full' src={smile} alt="" />
//                 </div>
//             </div>
//             <div className='flex items-center justify-center h-3/4 bg-green-400 w-1/3 rounded-4xl'>
//                 <div className='h-1/2 w-1/2 bg-amber-500 rounded-full border-red-600 border-4'>
//                     <img className='h-full w-full rounded-full' src={smile} alt="" />
//                 </div>
//             </div>
//             <div className='flex items-center justify-center h-3/4 bg-green-400 w-1/3 rounded-4xl'>
//                 <div className='h-1/2 w-1/2 bg-amber-500 rounded-full border-8'>
//                     <img className='h-full w-full rounded-full' src={smile} alt="" />
//                 </div>
//             </div>
//         </div>
//         <div className='flex items-center justify-center h-100 bg-red-600'>
//             <h1 className='text-8xl text-blue-600 font-bold hover:text-white cursor-pointer hover:scale-120'>
//                 Good Morning
//             </h1>
//         </div>
//         <div className='flex h-150 bg-[#f0f]'>
             
//         </div>
//     </div>
//   )
// }

// export default One


import React from 'react';
import './One.css';
import smile from '../src/assets/smile.jpg';

const One = () => {
  return (
    <div>
        <div className='flex items-center justify-center w-full h-[10vh] md:h-[30vh] bg-green-600 '>
            <h1 className='text-[55px] md:text-9xl font-bold'> TAIL WIND CSS</h1>
        </div>
      {/* Top Section */}
      <div className='flex flex-col md:flex-row h-auto md:h-screen bg-purple-900 gap-4 items-center px-4 py-6'>
        {/* Card 1 */}
        <div className='flex items-center justify-center h-64 md:h-3/4 bg-green-400 w-full md:w-1/3 rounded-3xl'>
          <div className='h-32 w-32 md:h-1/2 md:w-1/2 bg-amber-500 rounded-full border-8 overflow-hidden'>
            <img className='h-full w-full object-cover rounded-full' src={smile} alt="smile" />
          </div>
        </div>

        {/* Card 2 */}
        <div className='flex items-center justify-center h-64 md:h-3/4 bg-green-400 w-full md:w-1/3 rounded-3xl'>
          <div className='h-32 w-32 md:h-1/2 md:w-1/2 bg-amber-500 rounded-full border-4 border-red-600 overflow-hidden'>
            <img className='h-full w-full object-cover rounded-full' src={smile} alt="smile" />
          </div>
        </div>

        {/* Card 3 */}
        <div className='flex items-center justify-center h-64 md:h-3/4 bg-green-400 w-full md:w-1/3 rounded-3xl'>
          <div className='h-32 w-32 md:h-1/2 md:w-1/2 bg-amber-500 rounded-full border-8 overflow-hidden'>
            <img className='h-full w-full object-cover rounded-full' src={smile} alt="smile" />
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className='flex items-center justify-center h-64 bg-red-600'>
        <h1 className='text-4xl sm:text-6xl md:text-8xl text-blue-600 font-bold hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
          Good Morning
        </h1>
      </div>

      {/* Bottom Section */}
      <div className='flex h-64 md:h-96 bg-[#f0f]'>
        {/* Content can be added here */}
      </div>
     <div className='flex flex-col md:flex-row h-260 md:h-screen items-center justify-around bg-amber-600 gap-4 p-4'>
        <div className='h-90 md:h-3/4 w-full md:w-1/3 bg-blue-700'></div>
        <div className='h-90 md:h-3/4 w-full md:w-1/3 bg-blue-700'></div>
        <div className='h-90 md:h-3/4 w-full md:w-1/3 bg-blue-700'></div>
    </div>
    <div className='flex flex-col md:flex-row md:h-screen items-center justify-center bg-pink-600 gap-2.5 pt-2.5 pb-2.5'>
        <div className='h-100 w-[90%] md:h-4/5 md:w-3/5 bg-yellow-300'>

        </div>
        <div className='h-100 w-[90%] md:h-4/5 md:w-3/5 bg-yellow-300'>

        </div>
        <div className='h-100 w-[90%] md:h-4/5 md:w-3/5 bg-yellow-300'>

        </div>
        <div className='h-100 w-[90%] md:h-4/5 md:w-3/5 bg-yellow-300'>

        </div>
    </div>

    </div>
  );
};

export default One;
