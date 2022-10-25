import React from 'react';
import './style.scss';
const Banner = () => {
    const data = { name: "Dr. Jayashree mohanty" }
    return (
        <div id="banner" className='bg-gradient-to-r from-cyan-500 to-blue-500 banner' style={{ backgroundImage: "url('images/pattern.png')", backgroundColor: '#2c3258', position: 'relative' }}>
            <div className='opacity-reducer'></div>
            <div style={{ position: 'relative', zIndex: 1 }} className="px-4 py-6">
                <div className='text-2xl text-center text-white font-bold'>
                    Healthy skin is a reflection of overall wellness.
                </div>
                <div>
                    <div className="flex justify-center">
                        <img alt={data.name} src="images/istockphoto-177373093-612x612.jpg" className='rounded-full animate__animated animate__zoomIn' style={{ height: '10rem', width: '10rem' }} />
                    </div>
                    <h4 className='text-xl text-center font-extrabold doctor-name'>{data.name}</h4>
                </div>
                <div className='text-lg font-bold mt-3 text-slate-200 text-center'>
                  Taking care of your skin also helps prevent skin problems.
                </div>
                <div className='text-white'>
                    <button className='rounded-full text-base px-2 py-2 font-bold mt-4 ml-5 font-bold bg-pink-500'>Book appointment</button>
                    <button className='rounded-full text-base px-2 py-2 font-bold mt-4 ml-5 font-bold bg-sky-400'>Know more details</button>
                </div>
            </div>
        </div>
    )
}
export default Banner;