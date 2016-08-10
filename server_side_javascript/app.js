var express = require('express');
var app = express();//express모듈은 함수이고, app를 리턴해서 익스프레스를 쓰기위한 약속

//정적인 파일을 사용하기 위한 코드
app.use(express.static('public'));

app.get('/', function(req, res){
  res.send('Hello H');
});//url을 직접치고 들어오는 것을 확인

app.get('/dynamic', function(req, res){
  var lis = '';
  for(var i=0;i<5;i++){
    lis = lis +'<li>coding</li>';
  }

  var time = Date();
  var output = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      Hello, Dynamic !
      <ul>
      ${lis}
      </ul>
      ${time}
    </body>
  </html>`;//그레이브 액센트

  res.send(output);
});

app.get('/route',function(req, res){
  res.send('Hello Router, <img src="/illu.png">');
})
app.get('/login',function(req,res){
  res.send('<h1>Login please</h1>');
})
app.listen(3000,function(){
  console.log('Connected 3000 port!');
});
