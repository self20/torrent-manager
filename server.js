const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('...')
})

app.listen(process.env.npm_package_config_port)
