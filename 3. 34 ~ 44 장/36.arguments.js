// 매개변수 : 함수 선언 시 작성되는 변수
// 전달 인자 : 함수가 호출되면 전달되는 값
// 전달되는 매개변수와 인자의 개수가 달라도 에러가 없어.
// arguments는 함수에서 사용가능한데, 전달된 인자를 가지고 있음.

function sum () {
    var total = 0;
    for (var i =0; i< arguments.length; i++) {
        console.log(arguments[i])
        total += arguments[i];
    }
    return total;
}

var total = sum(1, 2, 3)
console.log('total', total)