const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config({path: "./.env.local"})

const app = express()

//Import routes
const postsRoute = require("./routes/cars")

app.use("/cars", postsRoute)

const URL = process.env.URL //It`s in my .env.local
const PORT = process.env.PORT // 3005

//ROUTES
app.get("/", (request, response) => {
    response.send("We`are at home")
})

mongoose.connect(URL, () => {
    console.log("Connected to the MongoDB!")
})

app.listen(PORT) 