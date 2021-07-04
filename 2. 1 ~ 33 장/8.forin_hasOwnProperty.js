// 다음은 객체 리터럴 방식의 객체 생성입니다.
var store = {
	snack: 1000,
	flower: 5000,
	beverage: 2000
};
Object.prototype.nandayo = function () {
	console.log('nandayo');
}

// 객체의 조상에 프로토타입 프로퍼티를 추가하게되면, 그 자손들은 자동으로 모두 영향을 받게 됩니다.
for (let item in store) {
	console.log(item, ' 가격이 ', store[item], '입니다.')
}
console.log('22222222222222222222222222222222222222222222222222222222222222222222')
for (let item in store) {
	// hasOwnProperty는 객체에 기본적으로 내장된 속성임.
	if (!store.hasOwnProperty(item)) continue; // 프로토타입 프로퍼티를 필터링한다.
	console.log(item, ' 가격이 ', store[item], ' 입니다.')
}
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')

// student에는 hasOwnProperty 메소드가 없지만 아래 구문은 동작한다.
console.log(store.hasOwnProperty('snack')); // true

/**
 * "Prototype" 객체는 생성자 함수에 의해 생성된 각각의 객체에 "공유 프로퍼티를 제공하기 위해" 사용한다. 즉, 없으면 부모에게서 찾는다.
 * 객체는 __proto__ 프로퍼티로 자신의 부모 객체(프로토타입 객체)인 Object.prototype을 가리키고 있다.
 */
console.log(store);
console.log(store.__proto__ === Object.prototype); // true

const car = {
	wheels: 4,
	drive() {
		console.log('buuuung~~ ');
	}
}

const bmw = {
	color: 'red',
	navigation: 1
}

const benz = {
	color: 'black'
}
const audi = {
	color: 'blue'
}

bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;
bmw.drive()

const x5 = {
	color: 'white',
	name: 'x5'
}

x5.__proto__ = bmw;
console.log(x5.color)
x5.drive()

console.log(Object.keys(x5)); // 상속된 속성은 나오지 않는다.
for (p in x5) {
	if (x5.hasOwnProperty(p)) {
		console.log('o', p);
	} else {
		console.log('x', p);
	}
}


/**
 * https://poiemaweb.com/js-prototype
 * 객체 리터럴 방식으로 생성된 객체는 결국 내장 함수(Built-in)인 Object() 생성자 함수로 객체를 생성하는 것을 단순화시킨 것이다.
 * 자바스크립트 엔진은 객체 리터럴로 객체를 생성하는 코드를 만나면 내부적으로 Object() 생성자 함수를 사용하여 객체를 생성한다.
 * "모든 객체"는 자신의 프로토타입 객체를 가리키는 [[Prototype]] 인터널 슬롯(internal slot) 을 갖으며 상속을 위해 사용된다.
 * 함수도 객체이므로 [[Prototype]] 인터널 슬롯을 갖는다. "함수" 객체는 일반 객체와는 달리 prototype 프로퍼티도 소유하게 된다. (함수만)
 * 그런데, 글로벌 Object는 일반 객체와 달리 함수 객체가 가지는 prototype 프로퍼티가 존재한다. (함수 라는 소리)
 * prototype 프로퍼티는 함수가 생성자로 사용될 때, 생성될 객체의 부모를 가리키도록 한다.
*/
// 매번 __proto__를 사용하면 힘들다.
// prototype을 사용하여 생성자함수에게 알려줄 수 있다.
// 부모 역할을 하는 프로토타입 객체의 프로퍼티나 메소드를 차례대로 검색한다. 이것을 프로토타입 체인이라 한다.
const K5 = function (color) {
	this.color = color;
}

K5.prototype.wheels = 4;
K5.prototype.drive = function () {
	console.log('buaaaang~~');
}
const k6 = new K5('red');
const k7 = new K5('white');
console.log(k6, k7);
k6.drive();
k7.drive();
// instanceof - 생성자 함수가 객체를 만들면 그 객체를 생성자의 인스턴스라고 부름.
console.log(k7 instanceof K5) // k7은 K5의 생성자 함수로부터 생성 되었다.
console.log(k7.constructor === K5) // 생성자로 만들어진 객체는 constructor라는 프로퍼티가 존재함. 컨스트럭터는 생성자를 가리킨다.
console.log(k7.__proto__ === K5.prototype)
/**
 * [[Prototye]] 인터널 슬롯 : 상속을 위해 사용
 * __proto__ : 부모의 프로토타입 프로퍼티를 가리킨다. ex) Object.prototype
 * prototype 프로퍼티 : 생성될 객체의 부모가 된다. (포통 프로토타입이라라고 하면 이것을 의미)
 * constructor : 생성자에 의해 생성된 객체가 가지게 되며, 생성자를 가리키게 된다.
 */

console.log('~~~~~~~~~~~~~')
console.log(K5.__proto__ === Function.prototype)
console.log(Object.__proto__ === Function.prototype) // 글로벌 객체는 함수의 프로토타입 프로퍼티를 가리키고 있다.
console.log(Function.prototype.__proto__ === Object.prototype) // 함수의 프로토타입 프로퍼티는 객체의 프로토타입 프로퍼티를 가리킨다.
console.log(k7.constructor.__proto__.__proto__.constructor === Object)
console.log('~~~~~~~~~~~~~')
//  console.log(store.__proto__ === Object.prototype);   // ① true 부모는 글로벌 객체이다.
//  console.log(Object.prototype.constructor === Object); // ② true 자신을 생성한 객체가 Object이다.
//  console.log(Object.__proto__ === Function.prototype); // ③ true 글로벌 기본객체를 생성한 것은 함수이다. 함수는 프로토타입 프로퍼티가 있다. __proto__는 부모의 prototype을 가리킨다.
//  console.log(Function.prototype.__proto__ === Object.prototype); // ④ true 함수

// 함수를 어디서 정의되었는지에 따라서 상위 스코프(범위, 변수에 접근할 수 있는 범위)가 결정된다. 이걸 렉시컬스코프라 한다. 클로저.
const Bently = function (color) {
	const c = color;
	this.getColor = function () {
		console.log(c);
	}
}
const b1 = new Bently("red");
b1.getColor();

// 클로저 : 함수와 렉시컬 환경의 조합
// 함수가 생성될 당시의 외부 변수를 기억
// 생성 이후에 계속 접근 가능
function makeAdder(x) {
	return function(y) {
		return x+y;
	}
}
const add3 = makeAdder(3);
console.log(add3(2)); // 5
const add10 = makeAdder(10);
console.log(add10(5)); // 10+5 = 15
console.log(add3(1)); // 3+1 = 4 ; makeAdder(3)과 makeAdder(10)이 다른 실행환경을 가진다. 
// makeAdder(3)는 실행을 끝냈지만, add3은 반복적으로 수행되면서 끝난 makeAdder(3)의 환경에 계속 접근하고 있다.
// add3은 makeAdder의 클로저라고 한다.
