const data=require('./ProductDatas.json');
const ConnectDB=require('./Connection');
const GameProduct=require('./ProductApi');
require('dotenv').config();


const Connections=async()=>{
    try {
        await ConnectDB('mongodb+srv://Mario9755:h4SQarDv7mWjCA2U@marioapi.yhnepuk.mongodb.net/MarioApi?retryWrites=true&w=majority');
        await GameProduct.deleteMany();
        await GameProduct.create(data);
        console.log('sucess');
      

    } catch (error) {
        console.log(error);
    }
}


Connections();