let user = {
    name: 'jaedo'
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descriptor)
// {
//     value: 'jaedo',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }

let user2 = {};
Object.defineProperty(user2, 'name', {
    value: 'jay', // 값
    enumerable: true, // for...in 반복문, Object.keys 같은 곳에서 출력이 될지
    configurable: false, // 속성 기술자를 변경할 수 있는지
    writable: true // 다시 값을 재할당 할 수 있는지
})

console.log(user2);
delete user2.name
console.log(user2)