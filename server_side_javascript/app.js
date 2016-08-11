var express = require('express');
var app = express();//express모듈은 함수이고, app를 리턴해서 익스프레스를 쓰기위한 약속
var bodyParser = require('body-parser');//BodyParser 모듈을 가져옴
//제이드 쓸때 이쁘게 만드는 소스
 app.locals.pretty = true;

// 템플릿 엔진 세팅, 익스프레스와 제이드를 연결.
app.set('view engine', 'jade');
app.set('views', './views');//Jade파일이 들어갈곳 => ./views

//정적인 파일을 사용하기 위한 코드
app.use(express.static('public'));

//bodyparser을 사용하기 위한 함수
app.use(bodyParser.urlencoded({ extended: false}))


app.get('/form',function(req, res){
  res.render('form');
});
app.get('/form_receiver',function(req, res){
  var title = req.query.title;  //get 에서는 query로 받는다.
  var description = req.query.description;
  res.send(title+","+description);
});
app.post('/form_receiver',function(req, res){
  var title = req.body.title; //post에서는 body를 쓰고 이를 쓰기위해서는 bodyparser가 있어야한다.
  var description = req.body.description;
  res.send('hello post ! '+title +', '+description);
});

//------------Query String
app.get('/topic/:topic_id', function(req, res){
  //res.send(req.query.id+','+req.query.name);
  var topics =[
    'Javascript is ...',
    'Nodejs is ...',
    'Express is ...'
  ];
  var output = `
    <a href = "/topic?id=0">JavaScript</a><br>
    <a href = "/topic?id=1">NodeJs</a><br>
    <a href = "/topic?id=2">Express</a><br><br>

    ${topics[req.params.topic_id]}
  `
  //${topics[req.query.id]}
  res.send(output);
});
//--------------------------------

app.get('/topic/:topic_id/:mode', function(req,res){
  res.send(req.params.topic_id+','+req.params.mode);
});

app.get('/template', function(req, res){
  res.render('temp', {time:Date(), _title:'Jade'});//렌더링 해서 보내줌. jade 쓰기위함.
});// /template이란 경로로 들어오는 사용자에게 temp파일을 렌더링해서 보여줌.


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



//get 방식 : 서버에서 정보를 get (가져오는) 방식
//post 방식 : 사용자의 정보를 서버로 전송하는 방식
