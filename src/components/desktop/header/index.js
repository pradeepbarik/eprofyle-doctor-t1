import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'animate.css';
import './style.scss';
const Header = () => {
    const [activeSection, setActiveSection] = useState('banner');
    const scrollTo = (id) => {
        const section = document.getElementById(id);
        setActiveSection(id);
        section.scrollIntoView({ block: "center", inline: "nearest", behavior: "smooth" });
    }
    useEffect(() => {
        scrollTo('banner');
    }, [])
    return (
        <header>
            <div id="fixed_header" className='drop-shadow-lg px-10 py-6 flex' style={{ marginBottom: '10px' }}>
                <div className="flex flex-1 items-center">
                    <span className='dot mr-2 ml-20' style={{ backgroundColor: '#06b6d4' }}></span>
                    <h4 className='text-2xl font-bold'>Dr. Jayashree Mohanty</h4>
                    <span className='dot ml-2' style={{ backgroundColor: '#d93286' }}></span>
                </div>
                <div className='flex flex-1 items-center'>
                    <nav>
                        <ul className='nav flex justify-start'>
                            <li onClick={() => { scrollTo('banner') }} className={activeSection === 'banner' && 'active'} >Home</li>
                            <li onClick={() => { scrollTo('treatment_list') }} className={activeSection === 'treatment_list' && 'active'} >Treatments</li>
                            <li onClick={() => { scrollTo('consulting_time') }} className={activeSection === 'consulting_time' && 'active'}>Consulting Time</li>
                            <li>
                                <FontAwesomeIcon icon={'circle-chevron-left'} />
                                Patient Stories
                            </li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                    <span className='ml-auto px-2 py-1 border-solid border-2 animate__animated animate__wobble call_btn'>
                        +91 8197 511 563
                    </span>
                </div>
            </div>
            <div style={{ marginTop: "5.3rem" }}></div>
        </header>
    )
}
export default Header;