const express = require('express')
const open = require('open')
const app = express()
const getPort = require('get-port')
const defaultPort = 9000;

(async function(){
  app.get('/hello', (req, res) => {
    res.send('Hello World!')
  })

  app.use(express.static("public"))

  //app.get('/
  const port = await getPort({port: defaultPort})
  const host = `http://localhost:${port}`

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    open(host)
    console.log();
    console.log(`Opening ${host} in default app.`)
  })
})()

