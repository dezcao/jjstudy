// ES6
// 매개변수가 하나일 경우 인자를 정의할 때 괄호를 생략할 수 있음.
// 매개변수가 없거나 둘 이상일 경우 괄호를 작성해야 한다.
// 화살표 함수 코드 블록을 지정하지 않고 한 문장으로 작성시 return 문을 사용하지 않아도 화살표 오른쪽의 표현식 계산 결과를 반환함.
// 화살표 함수 코드 블록을 지정했다면, 반환하고자 하는 값은 return 문을 작성해야 함. 하지 않으면 undefined(아무 값도 할당받지 않은 상태)가 반환됨.

const double = x => x + x;
console.log(double(2))

const add = (a, b) => a + b;
console.log(add(1, 2));
