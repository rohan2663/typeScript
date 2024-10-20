const express = require('express');
const mongoose = require('mongoose');
const Product = require('./productmodel');
const app = express();

mongoose.connect(
  "mongodb+srv://rohankumar2663:rohan2663@cluster0.rk009hd.mongodb.net/practice?retryWrites=true&w=majority&appName=Cluster0"
)
.then(()=>{
    console.log("Connected");
})
.catch((err)=>{
    console.log(err);
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/newproduct',(req,res)=>{
    res.sendFile(__dirname+'/newproduct.html');
});

app.post('/newproduct',async(req,res)=>{
    const products = await Product.create(req.body);
    res.status(200).json({
        sucess:true,
        products,
    });
});

app.get('/find',async(req,res)=>{
    const products = await Product.find();
    res.status(200).json({
        sucess:true,
        products,
    });
});

app.post('update/:id',async(req,res)=>{
    const products = await Product.findByIdAndUdate(req.params.id,req.body);
    res.status(200).json({
        sucess:true,
        products,
    });
});

app.delete('delete/:id',async(req,res)=>{
    const products = await Product.findByIdAndDelete(req.params.id);
    if(!products){
        return console.log("Not found");
    }
    res.status(200).json({
        sucess:true,
        message:"Product is deleted",
    });
});

app.listen(8080,(req,res)=>{
    console.log("Server started");
});