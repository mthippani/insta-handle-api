import express from 'express';
const cors = require('cors');

const app = express();
const userRoutes =  require('./routes/user/user-info');
const port = 3000;
app.use(cors());
app.get('/api', (req, res) => {
  res.send('Insta Handle API is Running')
});

app.use('/api', userRoutes)
app.listen(port, () => {
  console.log(`Insta Handle app listening on port ${port}!`)
});