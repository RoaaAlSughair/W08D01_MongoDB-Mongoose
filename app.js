const express = require("express");
const db = require("./db");
const todoModel = require("./schema");

const app = express();
app.use(express.json());

app.get("/todos", (req, res) => {
  todoModel
    .find({})
    .then((result) => {
      res.status(200);
      res.json(result);
    })
    .catch((error) => {
      res.json(error);
    });
});
app.post("/create/todo", (req, res) => {
  const { task, description, deadline, isCompleted, priority } = req.body;

  const todo = new todoModel({
    task,
    description,
    deadline,
    isCompleted,
    priority,
  });

  todo
    .save()
    .then((result) => {
      res.status(201);
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
app.put("/update/todo", (req, res) => {
  const updatedTodo = req.body;
  res.status(200);
  res.json("Put method");
});
app.delete("/delete/todo", (req, res) => {
  res.status(200);
  res.json("Delete method");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Example app is listening at http://localhost:${PORT}`);
});
