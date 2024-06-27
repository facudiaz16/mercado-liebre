const express = require('express');
const { register } = require('module');

const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));


app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
})

app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get('/register',function(req,res){
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.get('/login',function(req,res){
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})