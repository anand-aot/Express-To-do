const express = require('express')
const app = express()
const allTask = require('./allTasks')
app.use(express.json())

//Display all data
app.get('/', allTask.Display)

//Display data according to id
app.get('/:id', allTask.displayOne)

//Create data using POST Method
app.post('/', allTask.createData)

//Update data according to specific id
app.put('/:id',allTask.updateData)

//Delete data according to specific id
app.delete('/:id',allTask.deleteData)


app.listen(4500,()=>{
    console.log('server is running...')
})