//웹서버를 만드는 역할

const http = require('http');//http 모듈(부품)이 필요하다
            //require이 실행되면 http라는 모듈을 가져와 실행한다.
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
