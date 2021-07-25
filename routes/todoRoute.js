const express = require('express');
const router = express.Router();
const Todos= require("../models/todo");
// app.use(express.bodyParser());


router.get('/', async(req, res)=>{
    console.log(req.body);
    console.log("get method");
    try{
         const todos = await Todos.find();
        res.json(todos);
    }catch (error){
        res.send('error man', error);
    }
})

router.post('/create', async(req, res)=>{
        const todo = new Todos({
            name: req.body.name,
            description: req.body.description,
            status: req.body.status,
            date: req.body.date
        })
        todo.save()
        .then(data => {
            res.send(data);
            console.log(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
  
});

router.get('/byId/:id', async(req, res)=>{
    try{
         const todos = await Todos.findById(req.params.id);
        res.json(todos);
    }catch (error){
        res.send('error man', error);
    }
})

router.post('/update/:id', async(req, res)=>{
    // console.log(req.body);
    // const todo = new Todos
    Todos.findByIdAndUpdate(req.params.id,req.body,{ useFindAndModify: false })
    .then(data => {
        res.send(data);
        console.log(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
});

router.post('/delete/:id', async(req, res)=>{
    const id = req.params.id;
    Todos.findByIdAndRemove(id).then(data => {
        res.send(data);
        console.log(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
});



module.exports = router;

