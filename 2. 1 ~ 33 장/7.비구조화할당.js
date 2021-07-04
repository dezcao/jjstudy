// ES6
var obj = {a: 1, b: 2, c: 3, d: 4}
var {a, c} = obj;
console.log(`a : ${a}`);
console.log(`c : ${c}`);

var {a:newA=10, f:newF=5} = obj;
// a가 있으면 가져오되, 앞으로 newA라는 이름으로 쓰겠다.
// 바인딩 되는 값이 우선이지만 없다면 기본값을 지정하겠다.
console.log(`newA : ${newA}`); // 1
console.log(`newF : ${newF}`); // 5