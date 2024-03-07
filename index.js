const express = require('express');
const mongoose = require('mongoose');
const app = express();

// blycqwNpuQgQYxbG
// mongodb+srv://<username>:<password>@cluster0.3atpojp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

mongoose.connect('mongodb+srv://ustp:blycqwNpuQgQYxbG@cluster0.3atpojp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then (() => {
    console.log('MonggoDB Connected...');
})
.catch((err) => {
    console.log('Error connecting to MonggoDB', err);
})

const EmployeeRoute = require('./Routes/Employee.route');
app.use(('/employee'), EmployeeRoute);


// Error if wrong endpoint
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
})

// Middleware Express Handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})
app.listen(3000, () => {
    console.log('Listening on port 30000...');
})