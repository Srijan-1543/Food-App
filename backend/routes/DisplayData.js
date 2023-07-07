<<<<<<< HEAD
const express = require('express');
const router = express.Router();

router.post('/foodData', (req,res)=>{
    try {
        res.send([global.food_items,global.foodCategory]);
    } catch(error) {
        console.log(error.message);
        res.send("Server Error");
    }
})

=======
const express = require('express');
const router = express.Router();

router.post('/foodData', (req,res)=>{
    try {
        res.send([global.food_items,global.foodCategory]);
    } catch(error) {
        console.log(error.message);
        res.send("Server Error");
    }
})

>>>>>>> 46da6290ae76d6109024d307e0eff6c15018c567
module.exports = router;