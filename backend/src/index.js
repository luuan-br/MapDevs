/** @format */
const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")
const cors = require("cors")

const app = express()

mongoose.connect("mongodb://localhost:27017/week10", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () => {
	console.log(`Servi run in port: http://localhost:3333`)
})
