const mongoose= require('mongoose');
require('dotenv').config();
const _db=process.env.MONGODB_KEY;


//connect to database
mongoose.connect(_db)
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((err) => console.log('Database connection error:', err));

//create a schema - this is like the blueprint
const todoSchema= new mongoose.Schema({
    item:String
});

const Todo=mongoose.model('Todo', todoSchema);
//here we gve it a name TODO and also showed that we are basing the model on the schema todoschema


//now we are creating an item and save an item
// Todo({ item: 'get to the gym' }).save()
//     .then(() => {
//         console.log('Test item saved successfully');
//     })
//     .catch(err => {
//         console.log('Error saving item:', err);
//     });

// i had to comment this TODO function above so that we dont get adding new values to our db anytime we reload

module.exports=Todo;

