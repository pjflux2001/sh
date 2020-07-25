var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	sgMail = require('@sendgrid/mail');
//==========================
//SOME OTHER PACKAGES CONFIG
//==========================

app.set("view engine","ejs");
//setting view engine to ejs
app.use(express.static(__dirname + '/public'));
//serving custom resources
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//using bodyparser so recieve req object

//Serving HomePage
app.get("/",function(req,res){
	res.render("index");
});
app.get("/amenities",function(req,res){
	res.render("amenities");
});
app.get("/news",function(req,res){
	res.render("news1");
});
app.get("/form_donor",function(req,res){
	res.render("form_donor");
});
app.get("/form_patient",function(req,res){
	res.render("form_patient");
});
app.get("/common_pool",function(req,res){
	res.render("common_pool");
});
app.get("/plasma_bank",function(req,res){
	res.render("plasma_bank");
});
app.get("/technology",function(req,res){
	res.render("technology");
});
app.get("/contact",function(req,res){
	res.render("contact");
});
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
app.post("/email",function(req,res){
	var email =  req.body.email;
	var name =  req.body.name;
	var number = req.body.number;
	var age = req.body.age;
	var gender = req.body.gender;
	var country = req.body.country;
	var state = req.body.state;
	var city = req.body.city;
	var bg = req.body.bg;
	console.log(email);
	sgMail.setApiKey("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");
	const msg = {
	to: email,
	from: 'pj.flux2001@gmail.com',
	subject: 'Team BITSians : Success',
	text: 'Dear '+name+', Your form has been successfully pushed into our database. It will expire in next 72 hours, hence take the required steps to comply with the same. The information that was pushed into this form : Age : <br>Gender : <br>Country : <br>State : <br>City : <br>Blood Group :'+ bg +' We will contact you @'+number+' in case of any emergency. Best Regards, Team BITSians ',
	html: 'Dear '+name+',<br><br>Your form has been successfully pushed into our database. It will expire in next <strong>72 hours</strong>, hence take the required steps to comply with the same.<br><br>The information that was pushed into this form :<br><p>Age : '+age+'<br>Gender : '+gender+'<br>Country : '+country+'<br>State : '+state+'<br>City : '+city+'<br>Blood Group : '+ bg +'<br></p>We will contact you @'+number+' in case of any emergency.<br><br> Best Regards,<br> Team BITSians',
	};
	sgMail.send(msg);
	res.render("index");
})



 

//LISTENER PROCESS
var port = process.env.PORT || 31000
app.listen(port,process.env.IP,function(){
	console.log("Server started at port:"+port);
})
