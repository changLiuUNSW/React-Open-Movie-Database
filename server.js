const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Serve static assets.
app.use(express.static(path.resolve(__dirname, 'build')));

app.listen(port);
