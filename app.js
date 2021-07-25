const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const app = express()

mongoose.connect('mongodb+srv://mongo:mongo@myappcluster.twwef.mongodb.net/test', {useNewUrlParser: true});
const conn = mongoose.connection;

 conn.on('open', function(){
     console.log("welcome to my app");
 });

  app.use(express.json());
 const todoRouter = require('./routes/todoRoute');
 app.use('/todos', todoRouter);

 app.listen(3000, function(){
     console.log('hello am here');
 })
