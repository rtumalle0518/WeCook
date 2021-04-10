const express =require('express');
const mongoose =require('mongoose');
const morgan= require('morgan');
const path = require('path');

const app = express();
const PORT=process.env.PORT;

//pw is rutgers12
const MONGODB_URI='mongodb+srv://team12:rutgers12@test.cozvd.mongodb.net/newdb?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI || 'mongodb://localhost/team12db',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

mongoose.connection.on('connected',{} => {
    console.log('Mongoose is connected');
} );


//schema

const Schema= mongoose.Schema;
const recipepost = new Schema({
    title:String,
    body:String,
    date:{
        type:String,
        default:Date.now()
    }
    
});


//model
const recipe=mongoose.model('recipe',recipepost);


//saving data
const data={
    title:'Chicken parm',
    body:'yumm'
};

const newrecipepost= new recipe(data); //instance of model


newrecipepost.save((error) => {
    if (error){
        console.log('error');
        
    }
    else{
        console.log('data saved');
    }
});


app.use(morgan('tiny'));

app.get('/api',(req, res) => {
    const data ={
        username: 'hi',
        age: 5
    };
    res.json(data);
});

app.get('/api/name',(req, res) => {
    const data ={
        username: 'hello',
        age: 5
    };
    res.json(data);
});

