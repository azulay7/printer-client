import React from 'react'
import './JobItem.scss'
import { FaArrowUp, FaArrowDown,FaTrashAlt } from 'react-icons/fa';

function JobItem({ job }) {
    return (
        <div className='job-item-container'>
            <div className='job-order-controls'>
                <button><FaArrowUp /></button>
                <button><FaArrowDown /></button>
            </div>
            <div className='job-content'>
                <div className='job-item-details'>
                    <h1>{job.name}</h1>
                    <h2>{job.duration}</h2>
                </div>
                <div className='job-active-controls'>
                    <button><FaTrashAlt /></button>
                </div>
            </div>
        </div>
    )
}

export default JobItem