const express = require("express");
const db = require("./db");
const todoModel = require("./schema");

const app = express();
app.use(express.json());

app.get("/todos", (req, res) => {});
app.post("/create/todo", (req, res) => {});
app.put("/update/todo", (req, res) => {});
app.delete("/delete/todo", (req, res) => {});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Example app is listening at http://localhost:${PORT}`);
});