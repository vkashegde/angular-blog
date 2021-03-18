const express = require('express')
const app  = express();


app.get('*',(req,res)=>{
    res.send('<h1>Hey Buddy</h1>');
})



app.listen(8080,()=>{
    console.log('Listining on port 8080')
})