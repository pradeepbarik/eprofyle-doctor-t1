import React from 'react';
import 'animate.css';
import './style.scss';
const Header = () => {
    return (
        <header>
            <div id="fixed_header" className='drop-shadow-lg px-4 py-6 flex' style={{ marginBottom: '10px' }}>
                <div className="flex items-center w-full justify-center">
                    <span className='dot mr-2' style={{ backgroundColor: '#06b6d4' }}></span>
                    <h4 className='text-xl font-bold'>Dr. Jayashree Mohanty</h4>
                    <span className='dot ml-2' style={{ backgroundColor: '#d93286' }}></span>
                </div>
            </div>
            <div style={{ marginTop: "5rem" }}></div>
        </header>
    )
}
export default Header;