/**
 * javascript는 프로토타입 기반 언어이지만, 수많은 사람들이 class 기반 언어에 더 익숙했고,
 * 이걸 흉내내서 쓰곤 했음.
 * javascript는 프로토토입으로 해야 할 일을 사용자들이 익숙해하는 class 방식으로 쓸 수 있도록 문법을 추가함.
 * 클래스를 사용하든 프로토타입을 사용하든 결과적으로 동일한 목적을 달성하게 됨.
 * 저의 개인적인 생각에 이건 그냥 뭣같은 짓임.
*/

class Cart {
	constructor() {
		this.store = {address: '증미역'};
	}

	addProduct(product) {
		this.store[product.id] = product;
	}

	getProduct(id) {
		return this.store[id];
	}
}

const cart1 = new Cart();
cart1.addProduct({id: 1, name: '노트북'});
console.log(cart1.store);
console.log(cart1.getProduct(1));

/**
 * class를 통한 상속, prototye에서 본것과 같은 동작인데 
 * 익숙한 class 방식으로 할 수 있게 해주겠다는 것임.
 */

class BigCart extends Cart { // extends로 상속한다.
	constructor() {
		super({address: '강남역'}) // 상속을 하면, 생성자에서 부모의 생성자 함수를 호출해야 함. 이때 super를 씀.
	}
	addBigProduct(product) {
		this.addProduct(product); // 상속을 했기 때문에 부모의 함수를 쓸 수 있게되었음.
		console.log('뭔가 더 하고 싶은일 해도 됨. 300 사이즈가 넘으면 블라블라');
	}
}

const bigCart = new BigCart();
bigCart.addBigProduct({id:1, name: '가구', size: '300x300'});
console.log(bigCart.getProduct(1));

/**
 * 클래스에서
 * static 키워드로 정적 속성 또는 매소드 정의가 가능.
 * 공동체적인 판단을 필요로 하는 경우에 static을 사용합니다.
 * new를 사용하지 않고 사용하는데, 객체가 생성될 때 바인딩되는 prototype 객체가 아니라 생성자 내부에 붙여지기 때문입니다.
 */

class Product {
	static build(name, price) {
		const id = Math.floor(Math.random()*1000);
		return new Product(id, name, price);
	}
	constructor(id, name, price) {
		this.id = id;
		this.name = name;
		this.price = price;
	}
}

const gum = Product.build('껌', 1000);
console.log(gum)