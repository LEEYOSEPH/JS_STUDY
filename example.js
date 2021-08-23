var x = 1;

if (true) {
  var x = 10;
}
console.log(x); // 10

var i = 10;

for (var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}
console.log(i); // 5

//이 시점에는 변수 호이스팅에 의해 이미 foo 변수가 선언되었다.(1. 선언단계)
//변수 foo는 undefined로 초기화 된다(2.초기화 단계)
console.log(foo);
// 변수에 값을 할당(3. 할당 단계)
foo = 123;

console.log(foo); // 123

//변수 선언은 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 실행 된다.
var foo;

let foo = 1; // 전역변수

{
  let foo = 2; // 지역변수
  let bar = 3; // 전역변수
}

console.log(foo); //1
console.log(bar); // ReferenceError : bar is not defined

console.log(foo); // ReferenceError : foo is  no defined
let foo;

//런타임 이전에 선언 단계가 실행된다. 아직 변수가 초기화되지 않았다.
// 초기화 이전의 일시적 사각지대에는 변수를 참조할 수 없다.
console.log(foo);

let foo; // 변수 선언문에서 초 기화 단계가 실행 된다.
console.log(foo); // undefined

foo = 1; // 할당문에서 할당 단계가 실행 된다.
console.log(foo); // 1

let x = 1;
// let, const 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티가 아니다.
console.log(window.x); // undefined
console.log(x); // 1

{
  //변수 호이스팅이 발생하지 않는 것처럼 동작한다.
  console.log(foo);
  const foo = 1;
  console.log(foo); //1
}

// 블록 레벨 스코프를 갖는다.
console.log(foo); // ReferenceError : foo is not defined

const person = {
  name: "Lee",
};

//객체는 변경 가능한 값이다. 따라서 재할당 없이 변경이 가능하다.
person.name = "kim";

console.log(person); // {name : "Kim"}
