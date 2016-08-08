function hello(name){
  console.log('Hi,'+name);
}
hello('egoing');
//uglify pretty.js 로 데이터를 줄이자.
//uglify pretty.js -m  지역변수와 같이 이름을 바꿔도 상관없는것들을 바꿔준다.
//uglifyjs pretty.js -o uglified.js -m
//uglifyjs pretty.js -o pretty.min.js -m
