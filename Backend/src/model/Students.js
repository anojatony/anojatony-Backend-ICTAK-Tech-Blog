
// Accessing monngose package
const mongoose = require('mongoose');

// Database connection (connecting server with database using mongoose package)
// mongoose.connect('mongodb://localhost:27017/libraryapp', { useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.set('useCreateIndex', true);


mongoose.connect('mongodb+srv://userone:userone@ictak-files.utn4t.mongodb.net/Techblogaws?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false  });


// Schema definition
const Schema=mongoose.Schema;

const StudentsSchema=new Schema({
 
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    phone:String
});



// Model Creation
var Students=mongoose.model('students',StudentsSchema);

module.exports = Students;