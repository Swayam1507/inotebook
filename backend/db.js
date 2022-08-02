url='mongodb://localhost:27017/inotebook'
const mongoose = require("mongoose")
const connectToDB = () => {
    mongoose.connect(url);
}
module.exports=connectToDB;