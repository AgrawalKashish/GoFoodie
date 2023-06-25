const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://GoFoodie:gofoodie@cluster0.ibpfiqr.mongodb.net/?retryWrites=true&w=majority';
const mongodb= async()=>{
try {await mongoose.connect(mongoURI);
    
   console.log("connected to mongodb");}
catch(err){
    console.log("error", err)
   }
}

module.exports = mongodb;