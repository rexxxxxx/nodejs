var OrientDB = require('orientjs');

var server = OrientDB({
  host:'localhost',
  port: 2424,
  username: 'root',
  password: '1111'
});

 var db = server.use('o2');
