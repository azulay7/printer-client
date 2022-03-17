import React from 'react'
import './JobList.scss';
import '../styles.css'
import JobItem from './JobItem'
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react'

function JobList({ jobs }) {
  const [openDialog, setOpenDialog] = useState(false)
  
  const newJobDialog = () => {
    setOpenDialog(true)
  }
  const handleClose = () =>{
    setOpenDialog(false)
  }
  return (
    <div className='job-list-container'>
      <div className="job-list-header background-gray">
        <span>QUEUE</span>
        <Button className='add-job-btn' onClick={newJobDialog}>ADD A JOB</Button>
        
        <Dialog open={openDialog} onClose={handleClose}>
          <DialogTitle>Set backup account</DialogTitle>
        </Dialog>
      </div>
      <ul>
        {jobs.map(job => <JobItem key={job.name} job={job}></JobItem>)}
      </ul>
    </div>

  )
}

export default JobList