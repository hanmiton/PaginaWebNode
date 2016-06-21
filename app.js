var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect("mongodb://localhost/primera");

//definir el schema de nuestro sproductos

var productSchema = {
	title:String,
	descripiton:String,
	imageUrl:String,
	pricing: Number
};

var Product = mongoose.model("Product", productSchema);



app.set("view engine","jade");

app.use(express.static("public"));

app.get("/",function(req,res){
/*	var data = {
		title : "Mi primer super producto",
		descripiton : "Una mega super hiper compra",
		imageUrl : "data.png",
		pricing: 10
	}

	var product = new Product(data);

	product.save(function(err){
		console.log(product);
	});*/
	res.render("index");
});

app.get("/menu/new",function(req,res){
	res.render("menu/new");
});

app.listen("8080");