/**
 * 코드 재사용 및 작은 단위로 분리하여 관리하기 용이하기 때문에 사용함.
 * import, export 키워드를 사용함.
 */
function hello(){
	console.log('u waaaaaa ');
}
 
export { hello };
// node.js 모듈의 exports 방식입니다.
// module.exports.hello = function() {
// 	console.log('ya2c');
// }