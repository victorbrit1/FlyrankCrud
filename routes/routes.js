const express = require("express")
const router = express.Router()

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

module.exports = router