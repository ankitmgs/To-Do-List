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

//let create second route ---get data from database
router.get("/items", (req, res) => {
  todoItemsModel
    .find({})
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

//get item by item id
router.get("/getbyid/:id", (req, res) => {
  todoItemsModel
    .findById(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
      console.error(err);
    });
});

//let's update item
router.put("/update/:id", (req, res) => {
  todoItemsModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      console.log(data);
      res.status(200).json("update");
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

//Let's Delete iten from database
router.delete("/delete/:id", (req, res) => {
  //find the item by its id  and delete it
  todoItemsModel
    .findByIdAndDelete(req.params.id, req.body)
    .then((_id) => {
      console.log("id--->", _id);
      res.status(200).json({ message: "item deleted" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

//exports route
module.exports = router;
