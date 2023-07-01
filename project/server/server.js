const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.resolve(__dirname, '../build')));

const port=3001;
app.listen(port, ()=>{console.log(`Listening on port ${port}`)});