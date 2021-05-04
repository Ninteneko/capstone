const express = require("express");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: true}));



var mongoose = require('mongoose');
const { OPEN_READWRITE } = require("sqlite3");
var Schema = mongoose.Schema;

mongoose.connect('mongodb+srv://yarelit:yarmen96@cluster0.zoiwt.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });

var schema = new Schema({
  imagePath: {type: String, required: true},
  title: {type: String, require: true},
  description: {type: String, required: true},
  price: {type: Number, required: true}
});


const Product = mongoose.model("Product", schema);

router.get("/", (req, res, next) => {
  const data = {
    artist:
      '"Early on, I was inspired by the artists I appreciated, and the visual media I grew up watching . I enjoyed the works from likes of  Bob Clampett, Chuck Jones, and Tex Avery,  to more recent animation entrepreneurs like Satoshi Kon. I was the kid that was definitely  up for Saturday morning cartoons, and the teen that recommended foreign live action and animated films. Graduating and dipping my toes into the industry, I have greatly evolved and matured as an artist. I delved deeper into the art world, I had learned that there is a much bigger world out there, in terms of design, animation and illustration, that I would find passion to explore. Breaking the mold that I previously held myself in.Now I am my own artist, with the personality to inspire others. there isn’t anything in the world I wouldn’t mind watching just to learn and somehow incorporate that into myself to be the best we can be. That is something I hope all artists feel regardless on the direction they are going."',
  };

  res.render("home", data);
});

router.get("/products", (req, res, next) => {
    Note.find(function(err, docs){

      console.log(docs)
      res.render("products",{ products: docs});
    });
});

router.get("/signup", (req, res, next) => {
  res.render("signup", {username: 'admin', password: '1234'});
  
});

module.exports = router;

router.get("/admin", function(req, res){
  res.sendFile(__dirname + "/prod.html")
})

router.post("/admin", function(req, res){
<<<<<<< HEAD
  let newNote = new Note({
=======
console.log(req.body)
  let newNote = new Product({
>>>>>>> 59a1ad5bb0ab3161af15367001d110db1000418c
    imagePath: req.body.productImage,
    title: req.body.productTitle,
    description: req.body.productDescr,
    price: req.body.productPrice
  })

  newNote.save();
<<<<<<< HEAD
 })
=======
  res.redirect("/admin")
})
>>>>>>> 59a1ad5bb0ab3161af15367001d110db1000418c

