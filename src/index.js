const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (request, response) => {
  response.json({ info: 'Hello EMAJ BACKENDS' })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});