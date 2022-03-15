import React from 'react'
import './JobItem.scss'

function JobItem({ job }) {
    return (
        <div className='job-item-container'>
            <div className='job-order-controls'>
                <button>up</button>
                <button>down</button>
            </div>
            <div className='job-content'>
                <div className='job-details'>
                    <h1>{job.name}</h1>
                    <h2>{job.duration}</h2>
                </div>
                <div className='job-active-controls'>
                    <button>trash</button>
                </div>
            </div>
        </div>
    )
}

export default JobItem