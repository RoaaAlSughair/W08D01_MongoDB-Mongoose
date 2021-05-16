const mongoose = require("mongoose");
const options = {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
};

mongoose.connect("mongodb://localhost:27017/db", options).then(
    () => {
        console.log("DB ready to use");
    },
    (error) => {
        console.log(error);
    }
)