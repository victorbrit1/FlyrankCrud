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
    paramsId = Number(req.params.id)
    for(task of tasks){
        if(task.id === paramsId){
            return res.status(200).json(task)
        }
    }
    return res.status(404).json({error:`task ${paramsId} not found`})        
})

module.exports = router