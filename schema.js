const mongoose = require("mongoose");
const todoListSchema = new mongoose.Schema({
    task: {type:String, required:true, unique:true},
    description: {type:String},
    deadline: {type:Date, default:Date.now, required:true},
    isCompleted: {type:Boolean, required:true},
    priority: {type:String},
});

module.exports = mongoose.model("Todo list", todoListSchema);