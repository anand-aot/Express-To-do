const allTask = require('./allTasks')
const router = require('express').Router()


//Display all data
router.get('/', allTask.Display)

//Display data according to id
router.get('/:id', allTask.displayOne)

//Create data using POST Method
router.post('/', allTask.createData)

//Update data according to specific id
router.put('/:id',allTask.updateData)

//Delete data according to specific id
router.delete('/:id',allTask.deleteData)

module.exports = router