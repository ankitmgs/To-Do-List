const router = require('express').Router();
//import todo model
const todoItemsModel = require('../modals/todoModals');


//lets create our first route ---We will add Todo Item to our database
router.post('/api/item',async(req , res)=>{
    try {
       const newItem  = new todoItemsModel({
        item:req.body.item
       })
       //save this item in database
       const saveItem = await newItem.save()
       res.status(200).json('Item Added Successfully')
    } catch (error) {
        res.json(err);
        
    }
})

//exports route
module.exports =  router;