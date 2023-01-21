const todoModals = require('../modals/todoModals');

module.exports.getToDo = async (req, res) => {
    const todo = await todoModals.find();
    res.send(todo);
}
module.exports.saveToDo = (req, res) => {
    const { text } = req.body;

    todoModals
        .create({ text })
        .then((data) => {
            console.log("Added successfully...")
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports.deleteToDo = (req, res) => {
    const { _id } = req.body;

    console.log('id ---> ', _id);

        todoModals
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("Deleted Successfully..."))
        .catch((err) => console.log(err));
}

module.exports.updateToDo = (req, res) => {
    const { _id, text } = req.body;

        todoModals
        .findByIdAndUpdate(_id, { text })
        .then(() => res.set(201).send("Updated Successfully..."))
        .catch((err) => console.log(err));
}
