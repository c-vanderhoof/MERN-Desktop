const mongoose = require('mongoose');
const examDB = "examDB";

mongoose
    .connect('mongodb://localhost/${examDB}', {useNewUrlParser:true, useUnifiedTopology: true})
    .then(()=> {
        console.log('Connected to MongoDB ${examDB}');
    })
    .catch((err)=> {
        console.log('DB CONNECTION ERROR', err);
    });