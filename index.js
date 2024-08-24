require ('dotenv').config()
const express = require('express')
const cors = require('cors')
const configureDB = require('./config/db')
const port = process.env.PORT || 3000

const formRoutes = require('./app/routes/form-routes')

const app = express()
configureDB()

app.use(cors())
app.use(express.json())

app.use(formRoutes)

app.listen(port,()=>{
    console.log(`app running on port ${port}`)
})