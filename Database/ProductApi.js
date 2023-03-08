const mongoose=require('mongoose');





const ProductApi=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },

    description:{
        type:String,
        require:true,
    },

    price:{
        type:Number,
        require:true
    },

    stars:{
        type:Number,
        require:true
    },
    feature:{
        type:Boolean,
    },
    colors:[
        {color:String}
    ],
    images:{
        type:String
    }
});



const GameProduct=new mongoose.model('Game',ProductApi);


module.exports=GameProduct;