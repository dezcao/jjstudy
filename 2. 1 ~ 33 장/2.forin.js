// for (속성명 in 반복할 객체), for in 은 객체 순회에 사용, 배열도 객체이므로 사용할 수 있지만 권장하지 않는다고 함.
var store = {
	snack: 1000,
	flower: 5000,
	beverage: 2000
};

for (let item in store) {
	// hasOwnProperty 역시 객체에 기본적으로 내장된 속성.
	if (!store.hasOwnProperty(item)) continue; // 프로토타입 프로퍼티를 필터링한다. (사용을 권장) +++ 안드로메다행 특급 대기중.
	console.log(item, ' 가격이 ', store[item], ' 입니다.')
}