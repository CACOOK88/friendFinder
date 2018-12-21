// USE EXPRESS

const express = require('express')

// INITIATE EXPRESS SERVER AND PORT
const app = express()
let PORT = process.env.PORT || 3000

// DATA PARSING
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// LINK TO ROUTE JS FILES
require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app)

// START SERVER LISTENER
app.listen(PORT, function() {
  console.log(`listening on port ${ PORT }`)
})
