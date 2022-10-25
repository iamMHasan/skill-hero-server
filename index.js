const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = process.env.port || 5000;

const courses = require('./courses.json')
const courseDetails = require('./courseDetails.json')
const premium = require('./premium.json')

app.get('/', (req, res) => {
  res.send('skill hero server is running')
})

// api for courses catagory
app.get('/courses', (req, res)=> {
    res.send(courses)
})


// api for course details
app.get('/courses/:id', (req, res) => {
    const id = req.params.id 
    const selectedCourse = courseDetails.find(c => c.id == id)
    res.send(selectedCourse)
})

// api for checkout course
app.get

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})