const express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())
const port = 3002

const jobs = []
app.get('/api/v1/jobs/', (req, res) => {
    res.json(jobs)
})

app.post('/api/v1/jobs/', (req, res) => {
    console.log(`post new Job ${req.body}`)
    const job = req.body;
    if (jobs.length == 0) {
        job.status = 'printing'
    } else {
        job.status = 'queued'
    }
    jobs.push(job);
    res.json(job)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})