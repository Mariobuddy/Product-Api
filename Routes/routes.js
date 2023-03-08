const express=require('express');

const {ProductMain,ProductMainTest}=require('./ProductFun');

const router=express.Router();



router.route('/').get(ProductMain);

router.route('/test').get(ProductMainTest);


module.exports=router;
