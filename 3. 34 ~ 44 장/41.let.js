// ES6
// 스코프(유효범위)를 블록 범위로 지정, 기존엔 함수 범위였음.

if (true) {
    var funVal = 'global'
    let blockVal = 'local';
}

console.log(funVal) // global
console.log(blockVal) // ReferenceError
