/** 
 * this는 함수가 호출될때 동적으로 결정됩니다.
 * 작성된 코드가 재사용되기 위해 존재합니다.
 */

const product = {
	name: '가방',
	price: 3000,
	getVAT() {
		return this.price / 10;
	}
}

const valueOfProduct = product.getVAT();
console.log(valueOfProduct); // this 는 product

const calVAT = product.getVAT; // 수행을 하지 않았음. this는 아직 정해지지 않음.
const VAT2 = calVAT(); // 호출되었음 호출한 주체가 곧 this가 됨. 여기선 전역객체가 this가 됨.
console.log(VAT2); // 전역객체에 price가 없기 때문에 10으로 나누었을때 Not a number가 나옴.

// call, apply, bind를 통해서 this를 전달해 줄 수 있음. call, apply는 한번만, bind는 영원히. apply는 두번째 인자에 파라미터를 전달할때 배열로 넣어야 함.
const calVAT3 = calVAT.bind(product); // this를 전역이 아닌 product로 전달했음.
const VAT3 = calVAT3(); // 호출되었음 this는 저정된 product 이므로 price도 찾아짐.
console.log(VAT3);

/**
 * 화살표 함수의 this
 */
// 화살표 함수는, 정의될때 정적으로 this가 정해짐. 위에서 처럼 동적으로 this가 정해진게 아님!!!
// 그리고 화살표 함수의 this는 작성 시점의 부모환경의 this를 자신의 this로 하며 변경도 안됨.
const arrowFunc = () => {
	console.log(this);
}
const nowArrowFunc = arrowFunc.bind({d: 2}); // this의 변경이 이루어지지 않음.
nowArrowFunc();
