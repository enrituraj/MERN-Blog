const express = require('express')
const route = require('./routers/router')
const app = express()
const port = 5000

app.use('/',route);

app.listen(port, () =>{
    console.log(`MERN-Blog listening on port ${port}`)
})