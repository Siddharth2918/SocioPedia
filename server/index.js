const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res)=>{
    res.send("This is the server side.")
})

app.listen(3000, ()=>{
    console.log("Server is live at http://localhost:3000")
})

