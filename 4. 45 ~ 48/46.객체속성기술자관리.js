// Get, Set
let user = {}
Object.defineProperty(user, 'age', {
    get: function() {
        return this._age; // 자바스크립트는 접근제어자가 없기때문에, 언더바 사용시 암묵적으로 비공개 속성임을 나타냄.
    },
    set: function (age) {
        if (age < 0) {
            console.error('0보다 작은값은 올 수 없습니다.');
        } else {
            this._age = age;
        }
    },
    enumerable: true
});

user.age = 10;
console.log(user.age);
user.age = -1;