const GameProduct=require('../Database/ProductApi');



const ProductMain= async(req,res)=>{
     
    const {name,price,description,stars,images,colors,sort,select}=req.query;


    let obbdata={};
 
 
    if(sort){
     let data=sort.replace(',',' ');
    }
 
    if(name){
     obbdata.name=name;
    }
 
    if(price){
     obbdata.price=price;
    }
 
    if(description){
     obbdata.description=description;
    }
 
    if(colors){
     obbdata.colors=colors;
    }
 
    if(stars){
     obbdata.stars=stars;
    }
 
    if(images){
     obbdata.images=images;
    }
 
    

    let datas=await GameProduct.find(obbdata);
    res.status(200).json({datas});
};




const ProductMainTest= async(req,res)=>{
const {name,price,feature,sort,description,select}=req.query;


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