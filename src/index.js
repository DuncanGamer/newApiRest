
const express = require('express');
const app = express();
const port = 3000;
const user = require('./routes/users');
const path = require('path');
const my_middleware = (req, res, next) => { 
    console.log('Middleware')
    next();
}

//settings

app.set ('view engine', 'ejs');
app.set ('views', path.join(__dirname, 'views'));


//app.use(my_middleware);
app.use (express.urlencoded({extended: false}));


app.use (express.static(path.join(__dirname, 'public')))
//rutas
app.get ('/', (req, res) => {
    res.render('index');
});




app.use(user)

app.listen(port, () => {
    console.log(` app listening at http://localhost:${port}`)
}   );
