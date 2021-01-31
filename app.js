const express = require('express');
const app = express();
const path = require('path');

//MIDDLEWARE
app.use(express.static('public'));

//----- RUTAS -----
app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/register', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})


app.listen(app.set("puerto", process.env.PORT), console.log('Servidor corriendo en el Puerto 3001'));

