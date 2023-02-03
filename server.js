const express = require('express');
require('dotenv').config();

const app = express();
app.get('/', (req, res) => res.send('Deployed! 🚀'));

app.listen(process.env.PORT || 8080);
console.log(`Server is running on port ${process.env.PORT}`);
