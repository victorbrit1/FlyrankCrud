const express = require("express")
const router = require("./routes/routes")
const swaggerUI = require("swagger-ui-express")
const openapi = require("./docs/openapi.json")
const app = express()

const PORT = 3000

app.use(express.json())
app.use(router)
app.use("/docs", swaggerUI.serve, swaggerUI.setup(openapi))

app.listen(PORT, () =>{
    console.log("Server running")
})