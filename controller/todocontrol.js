var bodyParser=require('body-parser');
//we do this to access the post that was sent to us
var mongoose=require('mongoose');
//we can now use a mongoose on this project

var Todo=require('../base')

//var data=[{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];
var urlencodedParser=bodyParser.urlencoded({extended:false});
//the above is the middle ware we want to run in the post request down there


module.exports=function(app){
    app.get('/todo', function(req, res){
        //we will be getting data from mongodb and pass it to the view
        Todo.find({})
        .then(data => {
                res.render('todo', {todos: data});
            })
            .catch(err => {
                console.log(err);
                res.status(500).send(err);
            });

    });



    app.post('/todo', urlencodedParser, function(req, res){
        //get data, from the field and add it to mongodb

        Todo(req.body ).save()
        .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log(err);
                res.status(500).send(err);
            });
            
        // data.push(req.body)
        // //here we are pushing the value of the post to the array list
        // res.json(data);
        // // this is used to send the response back as json
    });



    app.delete('/todo/:item', function(req, res){
        //delect the requested item from mongodb

        var itemRequested = req.params.item.replace(/\-/g, " ");
        
        Todo.deleteOne({item: itemRequested})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log(err);
                res.status(500).send(err);
            });
    });
        // Todo.find({item:req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
        //     if(err) throw err;
        //     res.json(data);
        // });
        // // data=data.filter(function(todo){
        //     //we are going through and cycling through the data(the array) and each one referenced to will be acting as the todo function
        //     return todo.item.replace(/ /g, '-') !== req.params.item
        //     //the above returns either true or false
        // });
        // res.json(data);   
};
