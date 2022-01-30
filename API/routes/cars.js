const express = require("express")
const Car = require("../schemas/carSchema")

const cars = express.Router()

cars.get("/", async (request, response) => {
    try {
        const cars = await Car.find()
        response.status(302).json(cars)
    }catch(error) {
        response.status(500).json({message: error.message})
    }
})

cars.get("/:id", getCar, (request, response) => {
    response.json(response.car)
})

cars.post("/", async (request, responce) => {
    const car = new Car({
        manufacturer: request.body.manufacturer,
        model: request.body.model,
        price: request.body.price,
        description: request.body.description,
        image: request.body.image
    })
    try {
        const newCar = await car.save()
        responce.status(201).json(newCar)
    }catch(error) {
        responce.status(400).json({message: error.message})
    }
})

cars.delete("/:id", getCar, async (request, responce) => {
    try {
        console.log(responce.car)
        await responce.car.remove()
        responce.json(`Car with with id '${request.params.id}' was deleted!`)
    }catch(error) {
        responce.status(400).json({message: error.message})
    }

})

cars.patch("/:id", getCar, async (request, responce) => {
    if(request.body.model != null) {
        responce.car.model = request.body.model
    }
    if(request.body.manufacturer != null) {
        responce.car.manufacturer = request.body.manufacturer
    }
    if(request.body.price != null) {
        responce.car.price = request.body.price
    }
    if(request.body.image != null) {
        responce.car.image = request.body.image
    }
    if(request.body.description != null) {
        responce.car.description = request.body.description
    }
    try {
        const updatedCar = await responce.car.save()
        responce.json(updatedCar)
    }catch(error) {
        responce.status(400).json({message: error.message})
    }
})


async function getCar(request, responce, next) {
    let car
    try {
        car = await Car.findById(request.params.id)
        if(car === null) {
            return responce.status(404).json({message: "Subscriber with an id " + request.params.id + " does not exist"})
        }
    }catch(error) {
        return responce.status(500).json({message: error.message})
    }
    responce.car = car
    console.log(responce.car.model)
    next()
}

module.exports = cars