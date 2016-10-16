var path = require('path');
var express = require('express');
var morgan = require('morgan');

var app = express();
app.use(morgan());

// 无论请求哪个路径，均发送 vue 应用所在的 html
app.use(function(req, res){
  res.sendFile(path.join(__dirname, '1options.html'));
});

app.listen(3000, function(err){
  if(err) {
    console.error('express instance start failed, err:', err);
    return;
  }

  console.log('http listening on port 3000, open in browser: http://localhost:3000');
});
