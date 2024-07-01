const { v4: uuidv4 } = require('uuid');

const todoData = [
    {
        id:1,
        Title:'Intial title', 
        Description:'content written are displayed here...',
        dueDate:'15/07/2024'
    }
]


const uuidToNumber = () => {
    const uuid = uuidv4();
    const numericValue = parseInt(uuid.replace(/-/g, ''), 16);
    return (numericValue % 80000) + 1;
};


const Display = (req, res) => {
    res.json(todoData)
}

const displayOne = (req,res)=>{
    const id = req.params.id
    const specificId = todoData.find((todo_id)=> todo_id.id == id)
    if(!specificId) return res.status(404).json({message:'data not found for specified Id'})  
    res.json(specificId)
}

const createData = (req,res)=>{
    const taskBody = req.body
    if(!taskBody.Title || !taskBody.Description || !taskBody.dueDate) {
        return res.status(400).json({message:'Title, Description and dueDate are required'})
    }
    const addData = todoData.find((title_cont)=>title_cont.Title == taskBody.Title)
    if(!addData){
        const newData = {
            id:uuidToNumber(),
            ...taskBody
        }
        
        todoData.push(newData)
        res.json(todoData)
        return res.status(200).json({message:'Data added successfully...'})
    }
    else{
        return res.status(400).json({message:'data already exist'})
    }
}

const updateData = (req,res)=>{
    const id = req.params.id
    const taskBody = req.body
    if(!taskBody.Title || !taskBody.Description || !taskBody.dueDate) {
        return res.status(400).json({message:'Title, Description and dueDate are required'})
    }
    const specificId = todoData.find((todo_id)=> todo_id.id == id)
    if(!specificId){
         return res.status(404).json({message:'Data not found for specified Id'})
    }else{  
    const index = todoData.findIndex((todo_id)=> todo_id.id == id)
    todoData[index] = {
        id,
        ...taskBody
    }
    return res.json(todoData[index])
}
}

const deleteData = (req,res)=>{
    const id = req.params.id
    const specificId = todoData.find((todo_id)=> todo_id.id == id)
    if(!specificId) return res.status(404).json({message:'Data not found for specified Id'})
    const index = todoData.findIndex((todo_id)=> todo_id.id == id)
    todoData.splice(index,1)
    return res.json(todoData)
}

module.exports = {
    Display,
    displayOne,
    createData,
    updateData,
    deleteData
}