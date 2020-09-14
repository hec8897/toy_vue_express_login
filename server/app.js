const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql')
const cors = require('cors')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(cors());

app.get('/', (req,res) => {
    res.send('express start');
});




const Port = 3000
app.listen(Port, () => {
    console.log(`Express listening on port ${Port}`);
});