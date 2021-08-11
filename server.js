const express = require('express')
const open = require('open')
const app = express()
const port = 9000

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.use(express.static("public"));

//app.get('/

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  open(`http://localhost:${port}`);
})

