const express = require("express")

const app = express()


//ROUTES
app.get("/", (request, response) => {
    response.send("We`are at home")
})

app.listen(3005, () => {
    console.log("Server is loaded")
})