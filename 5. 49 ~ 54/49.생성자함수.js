/**
 * new를 사용하면 return 없이도 새로운 객체가 반환된다.
 * 함수 바디에서 this를 사용하여 반환될 객체의 초기 상태와 동작을 정의할 수 있다.
 * 위와 같은 함수를 생성자 함수라고 한다.
 * 하지만, new를 사용하지 않았을때 일반 함수와 동일하게 작동하기 때문에
 * 구별하기 위해 관례적으로 대문자로 시작하여 정의한다.
 * 
*/
function Teachar(name, age, subject) {
	this.name = name;
	this.age = age;
	this.subject = subject;
	this.teach = function(student) {
		console.log(`${student}에게 ${this.subject}를 가르칩니다.`)
	}
}

const jay = new Teachar('jay', 30, 'Javascript');
console.log(jay);
/**
 * 위에서 new를 사용했음.
 * 1. 빈객체가 만들어짐
 * 2. 빈 객체가 this에 할당됨.
 * 3. this에 name, age, teach와 같은 속성과 메소드 추가됨
 * 4. 빈 객체의 __proto__가 prototype 속성에 대입됨.
 * 5. 생성자의 반환값은 this가 됨.
 */

jay.teach('bbo');

console.log(jay.constructor); // 모든 객체는 constructor 속성을 가집니다.
console.log(jay instanceof Teachar);
console.log('***********************');
const jay2 = Teachar('jay', 30, 'Javascipt');
console.log(jay2);
console.log(age);
/**
 * new를 사용하지 않았음.
 * this는 전역객체에 바인딩됨.
 * jay2는 새 객체를 반환하고 있지 않으므로 아무것도 출력되지 않음. (모든 함수에서 return이 생략되어 있으면, undefined가 반환됨.)
 * 전달된 값 age는 전역객체에 바인딩되고, 출력시 전역객체에서 찾아져서 출력됨.
 */
