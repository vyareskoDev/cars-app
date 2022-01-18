const mongoose = require("mongoose")


const CarsSchema = mongoose.Schema({
    manufacturer: 
    {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Cars", CarsSchema)