/**
 * 생성자 함수로 만든 객체는 생성자 함수의 프로토타입 객체를 상속한다.
 * 즉, 모든 인스턴스는 생성자 함수의 프로토타입 객체의 속성, 메소드를 사용할 수 있다.
 * 자바스크립트의 모든 함수는 prototype 객체를 가자고, 모든 객체는 __proto__ 속성이 있는데,
 * __proto__는 해당 객체를 생성한 prototype 객체를 가리킨다.
 *
 */

function Storage() {
	this.dataStore = {}
}

Storage.prototype.put = function(key, data) {
	this.dataStore[key] = data;
}
Storage.prototype.getData = function(key) {
	return this.dataStore[key];
}

const productStorage = new Storage();
productStorage.put('id001', {name: '키보드', price: 3000});
console.log(productStorage.getData('id001'));

function RemovableStorage() {
	Storage.call(this); // RemovableStorage의 this를 Storage객체의 this로 삼도록 연결했다.
}
RemovableStorage.prototype = Object.create(Storage.prototype);
// Object.create는 주어진 인자를 __proto__에 연결한 새 객체를 반환한다.
// 즉, Storage.prototye 객체는 RemovableStoage 함수의 prototype의 __proto__가 된다.
// RemovableStorage는 Storage를 상속하게 된것이다. RemobableStorage의 프로토타입은 Storage의 prototype에 연결되어 Storage의 모든것을 쓸 수 있게된것.

RemovableStorage.prototype.removeAll = function() {
	this.dataStore = {};
}
const productStorage2 = new RemovableStorage();
productStorage2.put('id001', {name: '키보드', price: 2000});
productStorage2.removeAll();
const item2 = productStorage2.getData('id001');
console.log('제거된 뒤 id001키로 찾으면 나오는게 없음 - ', item2);