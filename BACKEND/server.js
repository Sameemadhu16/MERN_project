//Import dependancies
const express =  require("express");
const mongoose = require("mongoose");
const bodyPaser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;//assigning available port address

//use dependencies
app.use(cors());
app.use(bodyPaser.json());

const URL = process.env.MONGODB_URL;

//make connection with db
mongoose.connect(URL,{
   
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})

//open the connection
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection success!");
})

//listen to the PORT
app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})

