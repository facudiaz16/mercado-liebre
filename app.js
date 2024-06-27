const express = require('express');
const { register } = require('module');

const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));


const port = process.env.PORT || 3001;
app.listen(port, () =>console.log(`Servidor corriendo en le puerto ${port}`));

app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get('/register',function(req,res){
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.get('/login',function(req,res){
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})