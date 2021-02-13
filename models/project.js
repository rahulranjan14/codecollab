var mongoose = require("mongoose")

var projectSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxlength:100,
    },
    code: {
        type: String,
        maxlength: 5000,
        default: "// write your code here"
    }
})

module.exports = mongoose.model("Project", projectSchema)