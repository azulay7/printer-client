import React from 'react'
import './JobDetails.css'
import '../styles.css'
import { FaPause } from 'react-icons/fa';
import Button from '@mui/material/Button';

function JobDetails({ job }) {
  return (
    <div className="job-details">
      <div className='job-header background-gray'>
        <div>
          <span>CURRENT PRINITNG JOB | </span>
          <span className='time-left'>20%</span>
        </div>

        <Button> <FaPause /></Button>
      </div>


      <div className='job-master-details'>
        <img></img>
        <div className='job-info'>
          <div>
            <h1>{job?.name}</h1>
            <h2>{job?.operator}</h2>
          </div>

          <div className='job-timing'>
            {/* <span>{Date.now().toLocaleString()}</span> */}
            {/* <span>{Date.now().toLocaleString()}</span> */}
          </div>
        </div>
      </div>
    </div>

  )

  // return (<></>)

}

export default JobDetails