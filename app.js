var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect("mongodb://localhost/primera");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
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
/*	*/
	res.render("index");
});

app.post("/menu",function(req,res){
	if(req.body.password == "1234567"){
		var data = {
		title : req.body.title,
		descripiton : req.body.description,
		imageUrl : "data.png",
		pricing: req.body.pricing		
	}

		var product = new Product(data);

		product.save(function(err){
			console.log(product);
			res.render("index");
		});
	}else{
		res.render("/menu/new");
	}

	
});

app.get("/menu",function(req,res){
	res.render("menu/new");
});

app.listen("8080");