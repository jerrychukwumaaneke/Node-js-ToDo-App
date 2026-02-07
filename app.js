require('dotenv').config();
// the reqire is used to import. that is when we try to access an already existing code that is somewhere else

var express= require('express'); 

 var todocontrol=require('./controller/todocontrol');
//this is used to require a page and all especially the controler of the app we are building

// const {ping}=require('./database.js')
const Todo=require('./base.js')
//this is used to connect to the base page


var app=express();
 //set up our app

app.set('view engine', 'ejs');
 //set up our template engine

app.use(express.static('./public'));
 //this is used for static files 


 todocontrol(app)
 //fire controllers
//we will be firing th todo function that was returned to us
//we are basically just function that is in the function controller page

 app.listen(3000);
 console.log('you are listening to port 3000');
//  localhost:300/styles.css