const router = require('express').Router();
//import todo model

const todoModals = require('../modals/todoModals');


// const {getToDo ,saveToDo,deleteToDo,updateToDo} = require("../controllers/ToDocontroller")
//import todo model


//lets create our first route ---We will add Todo Item to our database
router.post('/api/item', async (req, res) => {
    try {
        const newItem = new todoModals({
            item: req.body.item
        })
        //save this item in database
        const saveItem = await newItem.save()
        // res.status(200).json(saveItem);
        res.status(200).json('Item Added Successfully')
    } catch (err) {
        res.json(err);
    }
})

// let craete second route ---get data frpm database
router.get('api/items', async (res, req) => {
    try {
        const allTopItems = await todoItemsModel.find({});
        res.status(200).json(allTopItems);

    } catch (err) {
        res.json(err);
    }
})

//let's update item
router.put('api/items/:id', async (req, res) => {
    try {
        //find the item by its id and update
        const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.status(200).json('Item Updated');
    } catch (error) {

    }
})

//Let's Delete iten from database
router.delete('/api/item/:id', async (req, res) => {
    try {
        //find the item by its id and delete it
        const deleteItem = await todoItemsModel.findOneAndDelete(req.params.id);
        res.status(200).json('Item Deleted');

    } catch (err) {
        res.json(err);

    }
})

//exports route
module.exports = router;