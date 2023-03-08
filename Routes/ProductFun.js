const GameProduct=require('../Database/ProductApi');



const ProductMain= async(req,res)=>{
    let datas=await GameProduct.find();
    res.status(200).json({datas});
};




const ProductMainTest= async(req,res)=>{
const {name,price,feature,sort,description,select}=req.query;
console.log(req.query)


let obb={};

let apidata=GameProduct.find(obb);

if(sort){
   let sortfix=sort.replace(',',' ');
    apidata=apidata.sort(sortfix);
}

if(select){
    let selectfix=select.split(',').join(' ');
    apidata=apidata.select(selectfix);
}

if(price){
    obb.price=price;
}

if(name){
    obb.name={$regex:name,$options:'i'}
}


if(feature){
    obb.feature=feature;
}

if(description){
    obb.description=description;
}

let page=Number(req.query.page)||1;
let limit=Number(req.query.limit)||3;

let skip=(page-1)*limit;

apidata=apidata.skip(skip).limit(limit);

   
let datas=await apidata;
res.status(200).json({datas,nbhits:datas.length});
console.log(obb);
 }


 module.exports={ProductMain,ProductMainTest};