const express = require('express')
const app = express()
const taskRouter = require("./routes/task")


app.use("/api", taskRouter)

app.listen(5000, () => {console.log("Server is running on port 5000")})