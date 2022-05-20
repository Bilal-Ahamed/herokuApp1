const express = require('express')

const app = express()

app.get('/',(req, res)=>{
    console.log('hi')
    res.json({'message':'json'})
})

app.listen(3000)