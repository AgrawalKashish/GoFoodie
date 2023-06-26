const express = require("express");
const router = express.Router();
router.post("/foodData",( req,res)=>{
    try{
        console.log(global.food_items);
        res.send([global.food_items]);
    }
    catch(err){
        console.log(err.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;