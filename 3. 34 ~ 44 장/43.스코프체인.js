// 스코프가 연결되어 있음
// 실행컨텍스트 Excecution Context(EC) : 실행을 위한, 실행 시점에 생성. 스택에 넣어짐. ex. 함수
// 렉시컬환경 : 실행 컨텍스트의 환경. 함수와 변수의 식별자와 값을 키,밸류 형태로 보관.
// 외부렉시컬 환경에 가서 값을 찾음.

// 스코프체인 활성화 객체 : 함수 내부에서만 접근 가능한객체 this, arguments 등
// 스코프체인 전역객체 : 자바스크립트가 동작하는 모든 시간 존재, 전역속성, window, document 등