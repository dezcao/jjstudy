// 클로저란, 렉시컬 환경을 기억하는 함수.

function counterClosure () {
    let count = 0;
    return {
        increase: function () {
            count++;
        },
        getCount: function () {
            return count;
        }
    }
}

const counter1 = counterClosure();
const counter2 = counterClosure();

counter1.increase()
counter1.increase()
console.log(counter1.getCount())

counter2.increase()
console.log(counter2.getCount())
