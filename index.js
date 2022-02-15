const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.get('/', (req, res) => {
  console.log('Here')
  res.sendFile(path.join(__dirname, '/Index.html'));
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})