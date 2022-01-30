const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const carsRoute = require("./routes/cars")
require("dotenv").config({path: "./.env.local"});


const PORT = process.env.PORT;
const URI = process.env.URI;


const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/cars", carsRoute)


mongoose.connect(URI, () => {
    console.log(`Mongoose version ${mongoose.version} is running`);
});

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
});

app.get("/cars", (request, responce) => {
    responce.json("List of cars is empty... But you can change this!")
})