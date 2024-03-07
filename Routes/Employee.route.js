const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    // next(new Error("Cannot get all employee"));
    res.send('List of all Employee');
});

router.post('/', (req, res, next) => {
    res.send('Create a new employee');
})

router.get('/:id', (req, res, next) => {
    res.send('Get a single employee');
})

router.patch('/:id', (req, res, next) => {
    res.send('Patch a single employee by its id');
})

router.delete('/:id', (req, res, next) => {
    res.send('Delete a single employee by its id');
})

module.exports=router;