const express=require('express');
const app=express();
const PORT=process.env.PORT||3000;
require('./Database/Connection');
const Product_router=require('./Routes/routes');
const ConnectDB=require('./Database/Connection');
require('dotenv').config();
const multer=require('multer');
app.set('view engine','ejs');
const path=require('path');
const bodyParser = require('body-parser');
const morgan=require('morgan');
app.use(express.static(`${path.resolve(__dirname)}/public`));
app.use('/api/product',Product_router);
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/',(req,res)=>{
    res.send('Hello from server');
});

const storage=multer.diskStorage({
  destination:'./upload',
  filename:(req,file,cb)=>{
    return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});


const upload=multer({
  storage:storage
});

app.use('/profile',express.static('./upload'));

app.post('/upload',upload.single('profile'),(req,res)=>{
  res.json({
    sucess:1,
    profile_url:`http://localhost:3000/profile/${req.file.filename}`
  })
})



app.get('/index',(req,res)=>{
    res.render('index');
})





const Start= async()=>{
    
    try {
        await ConnectDB(process.env.ApiUser);

        app.listen(PORT,()=>{
            console.log(`Server is started in port ${PORT}`);
        });
        
    } catch (error) {
        console.log(error);
    }
}

Start();