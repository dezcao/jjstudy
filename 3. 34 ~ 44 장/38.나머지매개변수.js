// ES6
function 하하(param, ...나머지변수) {
    for (var i = 0; i < 나머지변수.length; i++) {
        console.log(나머지변수[i])
    }
}

하하(1, '유재석', '하하', '이광수');