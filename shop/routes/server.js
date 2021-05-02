const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://yarelit:yarmen96@cluster0.zoiwt.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });



var schema = new Schema({
    imagePath: {type: String, required: true},
    title: {type: String, require: true},
    description: {type: String, required: true},
    price: {type: Number, required: true}
});
