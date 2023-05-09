const express = require('express');

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
  res.sendStatus(200);
})

app.listen(3000, () => console.log('Server started'))
