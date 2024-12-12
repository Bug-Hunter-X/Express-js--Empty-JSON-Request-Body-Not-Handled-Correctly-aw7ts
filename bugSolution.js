const express = require('express');
const app = express();
app.use(express.json());

// Custom middleware to handle empty JSON bodies
app.use((req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({ error: 'Request body cannot be empty' });
  }
  next();
});

app.post('/data', (req, res) => {
  console.log(req.body);
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));