const mongoose=require('mongoose');


const ConnectDB=(uri)=>{
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
}

module.exports=ConnectDB;



