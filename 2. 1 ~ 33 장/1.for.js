for (var i = 0; i < 10; i++) {
	if (i == 5) {
		continue;
	}
	if (i == 9) {
		break;
	}
	console.log(i + '번째 반복 문장 입니다.');
}