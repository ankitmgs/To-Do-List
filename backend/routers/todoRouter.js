const router = require("express").Router();
//import todo model
const todoItemsModel = require("../modals/todoModals");

//lets create our first route ---We will add Todo Item to our database
router.post("/item", (req, res) => {
  console.log(req.body);

  new todoItemsModel(req.body)
    .save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

//let craete second route ---get data frpm database
router.get("/items", async (res, req) => {
  try {
    const allTopItems = await todoItemsModel.find({});
    res.status(200).json(allTopItems);
  } catch (err) {
    res.json(err);
  }
});

//let's update item
router.put("api/items/:id", async (req, res) => {
  try {
    //find the item by its id and update
    const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("Item Updated");
  } catch (error) {}
});

//Let's Delete iten from database
router.delete("/api/item/:id", async (req, res) => {
  try {
    //find the item by its id and delete it
    const deleteItem = await todoItemsModel.findOneAndDelete(req.params.id);
    res.status(200).json("Item Deleted");
  } catch (err) {
    res.json(err);
  }
});

//exports route
module.exports = router;
