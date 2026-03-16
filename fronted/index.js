// index.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Express frontend is running on Docker!');
});

app.listen(port, () => {
  console.log(`Frontend running at http://localhost:${port}`);
});