var Product = require('../models/products')
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/Shopping');

var products = [
    new Product({
    imagePath: './images/subnation.png',
    title: 'Subnation Print',
    description: '8x10 print',
    price: 15
}),

new Product({
    imagePath: './images/basketball.png',
    title: 'Basketball Print',
    description: '8x10 print',
    price: 15
}),

new Product({
    imagePath: './images/nike.png',
    title: 'Just Do It Print',
    description: '8x10 print',
    price: 15
}),

];

var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result) {
        done++;
        if(done == products.length){
         exit();
        }
    });
    
}

function exit() {
    mongoose.disconnect();
}
