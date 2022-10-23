import React from 'react';
import './style.scss';
const Banner = () => {
    const data={name:"Dr. Jayashree mohanty"}
    return (
        <div id="banner" className='bg-gradient-to-r from-cyan-500 to-blue-500 banner' style={{ backgroundImage: "url('images/pattern.png')", backgroundColor: '#2c3258', position: 'relative' }}>
            <div className='opacity-reducer'></div>
            <div style={{ position: 'relative', zIndex: 1 }} className="flex flex-row px-14 py-6">
                <div style={{ textAlign: 'left' }} className="flex items-center">
                    <div className='animate__animated animate__backInLeft' style={{ color: 'white' }}>
                        <h4 className='text-6xl font-bold'>Healthy skin is a reflection of overall wellness.</h4>
                        <h4 className='text-2xl font-bold mt-3 text-slate-200'>Taking care of your skin also helps prevent skin problems.</h4>
                        <button className='rounded-full text-base px-4 py-2 font-bold mt-10 ml-5 font-bold bg-pink-500'>Book you appointment</button>
                        <button className='rounded-full text-base px-4 py-2 font-bold mt-10 ml-5 font-bold bg-sky-400'>Know more details</button>                    </div>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                    <div className="flex justify-center">
                        <img alt={data.name} src="images/istockphoto-177373093-612x612.jpg" className='rounded-full animate__animated animate__zoomIn' style={{ height: '400px' }} />
                    </div>
                    <h4 className='text-5xl font-extrabold doctor-name'>{data.name}</h4>
                </div>
            </div>
        </div>
    )
}
export default Banner;