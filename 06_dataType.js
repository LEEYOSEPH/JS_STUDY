/* 숫자 타입 */

//모두 숫자 타입
var integer = 10; //정수
var double = 10.12; // 실수
var negative = -20; // 음의 정수

//숫자 타입은 모두 실수로 처리된다.
console.log(1 === 1.0); // true
console.log(4 / 2); // 2
console.log(3 / 2); // 1.5

//숫자 타입의 세가지 특별한 값
console.log(10 / 0); // 양의 무한대
console.log(10 / -0); // 음의 무한대
console.log(1 * "String"); //NaN

/* 템플릿 리터럴 */
var template = "Template literal";
console.log(template); //Template literal

/* //멀티라인 문자열/* 
var str = "Hello
AudioWorkletNode.'; // error */

var template = '<ul>\n\t<li><a href="#">HOME</a></li>\n</ul>';
console.log(template);

var template = `<ul>
    <li><a href="#">Home</a></li>
</ul>`;

//표현식 삽입
var first = "GORO";
var last = "LEE";

// ES5
console.log("My name is" + fisrt + " " + last + ".");

//ES6
console.log(`My name is ${first} ${last}.`);

/* 불리언 타입 */

var foo = true;
console.log(foo); // true

foo = false;
console.log(foo); // false

/* undefined 타입 */
var foo;
console.log(foo); // undefined

/* 심벌 타입 */
//심벌 값 생성
var Key = Symbol("key");
console.log(typeof key); //symbol

//객체 생성
var obj = {};
