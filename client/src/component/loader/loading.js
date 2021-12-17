import React from 'react';

const Loader = () => {
    let circleCommonClasses = 'h-24 w-24 rounded-full   ';

    return (
   <div className='flex flex bg-yellow-300 justify-center '>
        <div className={`${circleCommonClasses} animate-bounce  bg-blue-400`}><span className=' text-2xl '>L</span> </div>
        <div className={`${circleCommonClasses} animate-bounce bg-red-400 justify-center`}><span className='text-2xl'>O</span></div>
        <div className={`${circleCommonClasses} animate-bounce bg-black`}><span className='text-2xl text-white '>A</span></div>
        <div className={`${circleCommonClasses} animate-spin bg-red-400`}><span className='text-2xl'>D</span></div>
        <div className={`${circleCommonClasses} animate-bounce bg-green-400`}><span className='text-2xl '>I</span></div>
        <div className={`${circleCommonClasses} animate-bounce bg-purple-400 m-3`}><span className='text-2xl'>N</span></div>
        <div className={`${circleCommonClasses} animate-bounce bg-purple-400 m-3`}><span className='text-2xl'>G</span></div>
        
   </div>
    );
};

export default Loader;