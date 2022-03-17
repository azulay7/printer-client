import React from 'react'
import './JobList.scss';
import '../styles.css'
import JobItem from './JobItem'
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useState, useRef } from 'react'

function JobList({ jobs, addJob }) {
  const [openDialog, setOpenDialog] = useState(false)

  const newJobDialog = () => {
    setOpenDialog(true)
  }
  const handleClose = (job) => {
    setOpenDialog(false)
  }

  const handleSubmit = (e) => {
    if (e.target[0]?.value == null || e.target[1]?.value == null) {
      return
    }
    const newJob = { name: e.target[0].value, duration: e.target[1].value };
    addJob(newJob)
    setOpenDialog(false)
  }
  const jobForm = <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name</label><br></br>
    <input type="text" htmlFor="name"></input><br></br>
    <label htmlFor="duration">Duration</label><br></br>
    <input type="number" htmlFor="duration"></input><br />
    <Button className='add-job-btn' type="submit" value="Submit">SAVE</Button>
  </form>

  return (
    <div className='job-list-container'>
      <div className="job-list-header background-gray">
        <span>QUEUE</span>
        <Button className='add-job-btn' onClick={newJobDialog}>ADD A JOB</Button>

        <Dialog open={openDialog} onClose={handleClose}>
          <DialogTitle>New Job</DialogTitle>
          {jobForm}
        </Dialog>
      </div>
      <ul>
        {jobs.map(job => <JobItem key={job.name} job={job}></JobItem>)}
      </ul>
    </div>

  )


}

export default JobList