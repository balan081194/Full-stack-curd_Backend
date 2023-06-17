const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT | 5000
const routes = require("./routes/TaskRoute")

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGOOSE_URL)
.then(()=>console.log("Mongodb is Connected"))
.catch((err)=>console.log(err))


app.use("/api",routes)


app.listen(PORT,()=>console.log(`server is listening on port ${PORT}`))



