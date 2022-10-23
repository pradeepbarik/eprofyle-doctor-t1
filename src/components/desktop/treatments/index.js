import React from 'react';
import './style.scss';
import { TREATMENTS } from '../../../data/treatment';
const Treatment = ({ data }) => {
    return (
        <div>
            <div className='item'>
                <div className='name'>{data.name}</div>
                <div>
                    <img src={data.banner} alt={data.name} />
                </div>
                <div className='px-4 py-4 description'>
                    {data.description}
                </div>
                <div className='action-bar'>
                    <button className='rounded-full text-white text-base px-4 py-2 font-bold font-bold bg-sky-500'>Message To Doctor</button>
                </div>
            </div>
        </div>
    )
}
const Treatments = () => {
    return (
        <>
            <div id="treatment_list" className='text-center mt-20'>
                <span className='text-4xl font-bold text-indigo-900 treatment-heading'>Mostly Patients are visited For</span><br />
                <span></span>
            </div>
            <div className='px-40 mb-20'>
                <div className='mt-10 treatment-list'>
                    {TREATMENTS.map((treatment, index) =>
                        <Treatment key={`treatment-${index}`} data={treatment} />
                    )}
                </div>
            </div>
        </>
    )
}
export default Treatments;