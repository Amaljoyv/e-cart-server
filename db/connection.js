//define connection between node and mongodb using mongoose
const mongoose = require('mongoose')

//get connection string from env

const DB = process.env.DATABASE

//connect mongodb
mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("cart Database Connected Succesfully");
}).catch((error)=>{
    console.log(error);
})