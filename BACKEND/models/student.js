const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;
const studentSchema = new  Schema({

    name :{
        type : String,
        required : true
    },
    age :{
        type : Number,
        required : true
    },
    gender :{
        type : String,
        required : true
    }
})

//first parameter document name(table name)
//second parameter schema
const Student = mongoose.model("Student",studentSchema);
//export the module
module.exports = Student;