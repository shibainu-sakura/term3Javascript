var express = require('express')
var app = express()

// # secret section https://expressjs.com/en/guide/routing.html
app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})
// ##########

app.get('/', function (req, res) {
  res.send('Hello World!')
})

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})
// ##########

// // ## just playing -the way to access url-
// app.get('/ab*cd', function (req, res) {
//   res.send('ab*cd')
// })
// // ##########

// #Route parameters
app.get('/users/:userId/books/:bookId', function (req, res) {
  // res.send(req.params)
  // #comment out above and add user params and id to access only userId
  res.send(req.params['userId'])
})
// ##########

// // #Prompt a file to be downloaded.
// res.download('/report-12345.pdf');
//
// res.download('/report-12345.pdf', 'report.pdf');
//
// res.download('/report-12345.pdf', 'report.pdf', function(err){
//   if (err) {
//     // Handle error, but keep in mind the response may be partially-sent
//     // so check res.headersSent
//   } else {
//     // decrement a download credit, etc.
//   }
// });
// // ##########

// #Route handlers
app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
})
// ##########



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
