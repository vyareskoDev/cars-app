const express = require("express")
const router = express.Router()
const Car = require("../models/Car")

router.get("/", (request, responce) => {
    responce.send("We`re on cars page")
})

router.post("/", (request, response) => {
    const car =
})

module.exports = router