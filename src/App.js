import './App.css';
import { useState } from 'react';
import JobDetails from './components/JobDetails';
import JobList from './components/JobList';

function App() {
  const [jobs, setJobs] = useState([{ name: 'job 1', duration: 0.3, status: "printing", startTime: new Date(Date.now() - 3) }, { name: 'job 2', duration: 0.4, status: "queue" }])
  const currentJob = jobs.find(job => job.status == 'printing')
  const queuedJobs = jobs.filter(job => job.status != 'printing')

  return (
    <div className="app-container">
      <JobDetails job={currentJob}></JobDetails>
      <JobList jobs={queuedJobs}></JobList>
    </div>
  );
}

export default App;
