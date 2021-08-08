/**
 * 코드 재사용 및 작은 단위로 분리하여 관리하기 용이하기 때문에 사용함.
 * import, export 키워드를 사용함.
 * 기본 모듈 처리 방식이 require를 사용하는 commonjs 방식으로 설정됨.
 */
import {hello} from './export_sample.js';// 자바스크립트 방식의 모듈 임포트 입니다.
// let {hello} = require('./c8.js'); // node.js의 common.js 스타일의 모듈 임포트 방식
hello();