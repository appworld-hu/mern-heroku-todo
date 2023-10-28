const express = require('express')
const ejs = require('ejs')
const path = require('path')

const app = express()

app.set("view engine", 'ejs')
.set("views", path.join(__dirname, "views"))
.use(express.static(path.join(__dirname, 'public')))
.get('/', (req,res)=>{
    res.send('pages/index')
})
.listen(3000);