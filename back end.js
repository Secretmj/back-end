const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 4000;
app.listen(port, () => {
    console.log("app is listening to port", port)
})  
const dbURL = 'mongodb+srv://Majeed:1234567@cluster0.cknyh26.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURL).then(() => {
    Consol.log("connected to the cloud")
}).catch((error) => { console.log(error) });

