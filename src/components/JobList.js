import React from 'react'
import './JobList.scss';
import '../styles.css'
import JobItem from './JobItem'

function JobList({jobs}) {
  return (
    <div className='job-list-container'>
      <div className="job-list-header background-gray">
        <span>QUEUE</span>
        <button className='add-job-btn' onclick="newJobDialog()">ADD A JOB</button>
      </div>
      <ul>
        {jobs.map(job =>  <JobItem key={job.name} job={job}></JobItem> )}
      </ul>
    </div>

  )
}

export default JobList