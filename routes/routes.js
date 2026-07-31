const express = require("express")
const router = express.Router()

const tasks = [
    {
        id: 1,
        title: "Study Express",
        done: false
    },
    {
        id: 2,
        title: "Build Task API",
        done: true
    },
    {
        id: 3,
        title: "Test endpoints",
        done: false
    }
]

router.get("/health", (req,res) =>{
    res.status(200).json({status: "ok"})
})
router.get("/", (req,res) =>{
    res.status(200).json({
        "name": "Task API",
        "version": "1.0",
        "endpoints": ["/tasks"]
    })
})
router.get("/tasks", (req,res) =>{
    res.status(200).json(tasks)
})
router.get("/tasks/:id", (req,res) =>{
    const paramsId = Number(req.params.id)
    for(const task of tasks){
        if(task.id === paramsId){
            return res.status(200).json(task)
        }
    }
    return res.status(404).json({error:`task ${paramsId} not found`})        
})

router.post("/tasks", (req,res) =>{
    const addedTask = {}

    addedTask.title = req.body.title
    if(!req.body.title)
        return res.status(400).json({error:"title is required" })
    addedTask.done = false
    greaterId = tasks.length ? Math.max(...tasks.map(tasks => tasks.id)): 0
    addedTask.id = greaterId + 1
    tasks.push(addedTask)
    return res.status(201).json(addedTask) 
})

router.put("/tasks/:id", (req,res) =>{
    const paramsId = Number(req.params.id)
    for(const task of tasks){
        if(task.id === paramsId){
            if(req.body.title === undefined && req.body.done === undefined){
                return res.status(400).send("title or done required")
            }
            if(req.body.title !== undefined){
                if(typeof req.body.title !== "string")
                    return res.status(400).json({error:"title must be string"})
                task.title = req.body.title
            }
            if(req.body.done !== undefined){
                if(typeof req.body.done !== "boolean")
                    return res.status(400).json({error:"done must be boolean"})
                task.done = req.body.done
            }
            return res.status(200).json(task)
        }
    }
    return res.status(404).json({message: `Task ${paramsId} not found`})
})

router.delete("/tasks/:id", (req,res) =>{
    const paramsId = Number(req.params.id)
    
    const index = tasks.findIndex(task => task.id === paramsId)
    if(index === -1)
        return res.status(404).json({message:"task not found"})

    tasks.splice(index,1)
    return res.status(204).send()
})

module.exports = router