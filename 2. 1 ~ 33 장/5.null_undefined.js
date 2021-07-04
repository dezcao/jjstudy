// null : 비어 있는, 존재하지 않는 값, 의도적으로 비어있음.
// undefined : 아무 값도 할당받지 않은 상태, 함수가 값을 반환하지 앟을때, 변수에 어떤 값도 대입하지 않고 정의했을때.
var a = null;
console.log(a);
console.log(typeof a); // Object라고 나오지만, 객체가 아닙니다. 하위호환 유지를 위해 "null"이 아님, 자바스크립트의 이슈로 인한 결과.

var b;
console.log(b);
console.log(typeof b);

console.log(isNaN(1 + null)) // false
console.log(isNaN(1 + undefined)) // true
