### 매개변수, 인자
```
매개변수 - Parameter, 지역변수와 동일 성질. 프로그램이 함수 호출 부를 만나면 스택에 매개 변수와 지역변수를 할당한다.
인자 - Argument, 값, 매개 변수에 대입돼는 값.
```

### 자료형
```
원시타입 - primitive data type, 변수가 직접 값을 보관. Number, Boolean, String, Symbol, null(빈 값), undefined(존재하지 않는 값)
참조타입 - reference data type, Object, 값의 메모리 주소를 변수에 할당하여 값을 참조.
Global Object 객체 - 모든 객체의 부모. 함수, 배열, 원시 자료형을 감싼 객체(String, Number, Boolean) 혹은 연산 특화객체(Math, JSON, RegEx),
					Collection 특성의 객체(Set, Map) 등의 표준 내장 객체가 있음. console역시 자바스크립트의 내장 객체임.
```

### 조건문
```
if - if가 연속된다면 계속 ()의 내용을 검증 할 것.
else if - 해당 조건을 만족한다면 다른 조건은 검증하지 않음.
else - 어떤 것에도 해당하지 않은경우.
switch(표현식) - 경우에 따라 if보다 정돈되어 보임. 표현식은 값을 생성. break는 그 다음의 코드를 더이상 실행하지 않음. 어디에도 만족하지 않으면 default가 실행.
	switch(표현식) {
		case 값1:
			명령문1
			break;	
		case 값2:
			명령문2
			break;
		default: 
			명령문3
	}
```

### 반복문
```
for
for in
for of
while
break
continue
```

#### 초보자를 위한 JavaScript 200제
```
5~33장
```