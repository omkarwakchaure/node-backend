const express = require('express')
const app = express()
const port = 4000

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('omkar')
})

app.listen( process.env.port,()=>{
    console.log(`Server running at http://localhost:${port}`)
})