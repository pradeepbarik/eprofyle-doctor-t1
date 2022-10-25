import React from 'react';
import { useInView } from 'react-intersection-observer';
import './style.scss';
const ConsultingTiming = () => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    });
    return (
        <div ref={ref} id="consulting_time" style={{ backgroundImage: "linear-gradient(45deg, rgb(150 161 165), transparent)" }}>
            <div className='py-12 px-2' style={{ backgroundImage: "url('images/pattern3.png')", backgroundRepeat: 'no-repeat', position: 'relative' }}>
                <div className='text-center text-2xl font-bold mb-6'>Consulting Time</div>
                <div className={`consulting_time animate__animated ${inView ? ' animate__flipInX' : ''}`}>
                    {new Array(7).fill('').map((el, i) =>
                        <div>
                            <div className='text-center font-semibold text-xl text-slate-700'>Monday</div>
                            <div className='flex flex-col slot'>
                                <span>08:00 am - 10:00 am</span>
                                <span>&</span>
                                <span>08:00 am - 10:00 am</span>
                            </div>
                        </div>
                    )}
                </div>
                {/* <div className='flex items-center flex-1 px-10 text-center'>
                    <div className={`animate__animated ${inView && 'animate__bounceInLeft'}`}>
                        <span className='font-bold text-6xl text-cyan-900'>How can i consult with Doctor?</span>
                    </div>
                </div> */}
                {/* <div className='flex-1 justify-center'>
                    <div className='px-20'>
                        <div className='text-center text-4xl font-bold mb-6'>Consulting Time</div>
                        <div className={`card animate__animated ${inView ? ' animate__flipInX' : ''}`}>
                            <table className='table-auto border'>
                                <tr className='heading'>
                                    <td colSpan={4}>Day</td>
                                    <td colSpan={4}>Morning Session</td>
                                    <td colSpan={4}>Evening Session</td>
                                </tr>
                                {new Array(7).fill('').map((el, i) =>
                                    <tr key={i}>
                                        <td colSpan={4} className="font-bold">Monday</td>
                                        <td colSpan={4}>08:00 AM - 02:00 PM</td>
                                        <td colSpan={4}>06:00 PM - 09:00 PM</td>
                                    </tr>
                                )}
                            </table>
                        </div>
                    </div>

                </div> */}
            </div>
        </div>
    )
}
export default ConsultingTiming;