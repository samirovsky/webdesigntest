const express = require('express');
var cors = require('cors');
const app = express();

var whitelist = ['https://webdesign-backend.herokuapp.com/']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(express.static("./dist"));

app.options('/*', cors()) // enable pre-flight request for DELETE request

app.del('/*', cors(), function (req, res, next) {
  res.sendFile("index.html", {root: "dist/"});
});

app.patch('/*', cors(), function (req, res, next) {
  res.sendFile("index.html", {root: "dist/"});
});

app.post('/*', cors(), function (req, res, next) {
  res.sendFile("index.html", {root: "dist/"});
});

app.get("/*", cors(), function(req, res, next) {
    res.sendFile("index.html", {root: "dist/"}
  );
});

app.listen(process.env.PORT || 8080);