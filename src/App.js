import './App.css';
import { useState, useEffect } from 'react';
import JobDetails from './components/JobDetails';
import JobList from './components/JobList';
import { postData } from './fetch-api';

const JOB_URL = "http://localhost:3002/api/v1/jobs/";

function App() {
  const [jobs, setJobs] = useState([])
  const currentJob = jobs.find(job => job.status == 'printing')
  const queuedJobs = jobs.filter(job => job.status != 'printing')
  const loadData = async () => {
    const res = await fetch(JOB_URL);
    setJobs(await res.json());
  };
  useEffect(() => {
    //mock server
    loadData()
    return () => { };
    // setJobs([{ name: 'job 1', duration: 0.3, status: "printing", startTime: new Date(Date.now() - 3) }, { name: 'job 2', duration: 0.4, status: "queue" }])
  }, [])

  const addJob = newJob => {
    const newJobs = [...jobs, newJob];
    postData(JOB_URL, newJob)
    setJobs(newJobs)
  }
  return (
    <div className="app-container">
      <JobDetails job={currentJob}></JobDetails>
      <JobList jobs={queuedJobs} addJob={addJob}></JobList>
    </div>
  );
}

export default App;
