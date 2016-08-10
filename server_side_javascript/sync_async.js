var fs = require('fs');
//Sync
console.log(1);
//이게 끝나야지
var data = fs.readFileSync('data.txt', {encoding:'utf8'});
//이게 된다.
console.log(data);

//Async

console.log(2);
fs.readFile('data.txt',{encoding:'utf8'},function(err, data){
  console.log(3);
  console.log(data);
})
console.log(4);
//result : 2 4 3    readFile을 다른사람에게 던져버렸다.
//
