console.log('덧셈 연산자는 숫자형 또는 문자형으로 바꿈. :  5+"1" ');
var str = 5 + '1'; // 덧셈 연산자는 "숫자형 또는 문자형"으로 바꿈.
console.log(str)
console.log(typeof str)

console.log('\r단항 양수(+)는 숫자형으로 바꿔줌.');
var num = +str; // 단항 양수(+)는 숫자형으로 바꿔줌.
console.log(num)
console.log(typeof num)

console.log('\r명시적 자료형 변환');
str = String(num); // 명시적 자료형 변환
console.log(str)
console.log(typeof str)

num = Number(str);
console.log(num)
console.log(typeof num)