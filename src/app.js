const express = require('express')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const router = require('./routes/index')
const setHeaders = require('./utils/middlewares/setHeaders.js')
const errorHandler = require('./utils/middlewares/errorHandler.js')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cookieParser()) // Manejo de cookies.
app.use(express.urlencoded({ extended: true, limit: '50mb' })) // Analiza solicitudes con cabecera "application/x-www-form-urlencoded" parseando el contenido del req.body con este tipo de contenido especificado a codigo JS.
app.use(express.json({ limit: '50mb' })) // Analiza solicitudes con cabecera "Content-Type: application/json" parseando el contenido del req.body con este tipo de contenido especificado a codigo JS.
app.use(bodyParser.json())
app.use(morgan('dev')) // Pinta (registra) en consola detalles de cada solicitud HTTP realizada.
app.use(cors())
app.use(setHeaders)
app.use('/', router)
app.use(errorHandler)

module.exports = app
