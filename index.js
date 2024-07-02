const express = require('express')
const app = express()
const route = require('./routing')
app.use(express.json())

// routes
app.use('/routing',route)


app.listen(4500,()=>{
    console.log('server is running...')
})