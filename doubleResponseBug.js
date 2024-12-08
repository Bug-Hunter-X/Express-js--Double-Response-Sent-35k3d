const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This is a common mistake.  The response is sent twice!
  res.send('Hello World!');
  res.send('This will never be sent.');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});