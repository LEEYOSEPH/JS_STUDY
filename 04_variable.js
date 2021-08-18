/* 
변수에 여러 개의 값을 저장 하는 방법

*/

//변수는 하나의 값을 저장하기 위한 수단이ㅏㄷ.
var userId = 1;
var userName = "Lee";

//객체나 배열 같은 자료구조를 사용하면 여러 개의 값을 하나로 그룹화해서 하나의 값처럼 사용할 수 있다.
var user = { id: 1, name: "Lee" };

var users = [
  { id: 1, name: "Lee" },
  { id: 2, name: "kim" },
];

/* 변수 선언의 실행 시점 */
console.log(score); // undefined

var score; // 변수 선언문

score = 90; // 값의 할당

var score = 90; // 변수 선언과 값의 할당

score = 100; // 값의 재 할당

/* 변수는 쉼표(,)로 구분해서 하나의 문에서 여러 개를 한번에 선언 할수 있음
하지만 추천하지 않음 */
var person, $elem, _name, first_name, vall;

/* ES5부터 식별자를 만들 때 유니코드 문자를 허용 하지만 비추천 */
var 이름, 名前;

/* 대소문자를 구분 */
var firstname;
var firstName;
var FIRSTNAME;

/* 변수명은 변수의 존재 목적을 쉽게 이해할 수 있도록 의미를 명확히 표현 해야 한다. */
var x = 3; // NG x 변수 의미를 알 수 없음
var score = 100; // OK score 변수는 점수를 의미한다.

/* 네이밍컨벤션 */
//카멜케이스
var firstName;

//스네이크 케이스
var first_name;

//파스칼 케이스
var FirstName;

//헝가리언 케이스
var strFirstName; // type + identifier
var $elem = document.getElementById("myId"); // DOM 노드
var observable$ = fromEvent(document, "click"); // RxJS 옵저버블
