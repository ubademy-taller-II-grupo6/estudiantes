const express = require ('express');
const cors = require('cors');
const path = require('path');

const {json, urlencoded} = express;

const app = express();

const port = process.env.PORT || 8080

const corsOptions = {
    origin :'*',
    optionSuccessStatus : 200
}

app.use(cors(corsOptions));

app.use('/', (req,rest) => {
    res.send('Servicio operativo');
})

app.listen(port,() => {
    console.log('Servidor corriendo en el puerto: ${port}');
})