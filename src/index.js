
const express = require('express');
const app = express();
const port = 3000;
const user = require('./routes/users');
const path = require('path');
const my_middleware = (req, res, next) => { 
    console.log('Middleware')
    next();
}

//app.use(my_middleware);
app.use (express.static(path.join(__dirname, 'public')))
//rutas
app.get ('/', (req, res) => {
    res.send('Hola mundo');
});

app.get ('/users', (req, res) => {
    res.send('Usuarios');
}   );


app.use(user)

app.listen(port, () => {
    console.log(` app listening at http://localhost:${port}`)
}   );
