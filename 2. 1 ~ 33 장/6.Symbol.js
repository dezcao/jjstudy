// ES6
const symbol = Symbol(); // 함수 호출()을 통해서 생성되며 new로는 만들 수 없어.
const hello = Symbol('hello'); // 인자를 전달할 수 있지만, 디버깅 용이며 매번 새로 만들어지기 때문에 항상 그 고유한 Symbol이 생김.

console.log(Number(3) === Number(3));
console.log(Symbol('hello') === Symbol('hello'));
console.log(Symbol() === Symbol());
console.log(typeof Symbol())

const nation = Symbol('nation');
const user = {
	name: 'jay'
}
user.sex = 'femail'
console.log(user.sex)

user[nation] = 'kr'
console.log(user[nation])
console.log(user)

for (let key in user) {
	console.log(key);
}
console.log('result of JSON.stringify : ', JSON.stringify(user));


const symbolProperties = Object.getOwnPropertySymbols(user);
console.log(symbolProperties, ' : ', symbolProperties[0], ' => ', user[symbolProperties[0]])