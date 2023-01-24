
const express = require('express');
const app = express();
const port = 3000;

//rutas

app.get ('/', (req, res) => {
    res.send('Hola mundo');
});

app.get ('/users', (req, res) => {
    res.send('Usuarios');
}   );

app.listen(port, () => {
    console.log(` app listening at http://localhost:${port}`)
}   );
