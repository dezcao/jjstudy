// 유효범위 : 변수와 매개변수가 어디까지 유효한가
// 코드의 작성시점에 결정됨. (정적, 렉시컬)스코프

var a = 'global';

function print1() {
    console.log(a); // print1이 작성된 시점에 a는 작성된 시점에서 부모를 찾아간다.
}

function print2() {
    var a = 'local';
    print1(); // print1이 호출된 시점에서 부모를 찾아간다면 local이 되겠지만, 작성시점의 부모를 찾아가면 global이 된다. (선택! 대부분 언어는 정적스코프 기준을 따름.)
}

print1()
print2()