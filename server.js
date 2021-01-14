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
app.get("/*", cors(corsOptions), function(req, res) {
    res.sendFile("index.html", {root: "dist/"}
  );
});
app.listen(process.env.PORT || 8080);