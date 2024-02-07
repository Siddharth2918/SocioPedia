const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const { default: authRoutes } = require('./routes/authRoutes');
const { register } = require('./controllers/auth');


dotenv.config();
const app = express();
app.use(cors());


app.use('/auth', authRoutes);

app.post('/auth/register', register);


// app.get('/', (req, res)=>{
//     res.send("This is the server side.")
// })

app.listen(3000, ()=>{
    console.log("Server is live at http://localhost:3000")
})

