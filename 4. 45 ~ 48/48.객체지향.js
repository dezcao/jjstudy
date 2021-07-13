// 객체 : 식별 가능한 구체적 사물 또는 추상적 개념. (구체, 추상이 한문장에 들어가니 언밸런스한 설명)
// 인스턴스 : 구체적 사물, instance 변역은 "예" 라고 되어있음. 어떤 클래스의 구조로 컴퓨터 저장공간에 할당된 '실체' = 구체적 사물.

// 객체 = 상태(값, 변수) + 행동(메소드, 함수)
// 모든 객체는 다른 객체의 원형(prototype)이 될 수 있음.
// 프로토타입은 모든 객체에 공통 사항을 적용할 수 있음.

const teacherJay = {
    name: '제이',
    age: 30,
    teachJavascript: function(student) {
        student.gainExp();
    }
}

const studentBbo = {
    name: '뽀',
    age: 20,
    exp: 0,
    gainExp: function() {
        this.exp++;
    }
}

console.log(studentBbo.exp)
teacherJay.teachJavascript(studentBbo);
console.log(studentBbo.exp)