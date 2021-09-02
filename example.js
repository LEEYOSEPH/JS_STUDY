const x = 1;

function foo() {
  const x = 10;

  // 상위 스코프는 함수 정의 환경(위치)에 따라 결정된다.
  // 함수 호출 위치와 상위 스코프는 아무런 관계가 없다.
  bar();
}

// 함수 bar는 자신의 상위 스코프, 즉 전역 렉시컬 환경을 [[Environmnet]]에 저장하여 기억한다.
function bar() {
  console.log(x);
}

const x = 1;

// 1
function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  }; //2
  return inner;
}

// outer 함수를 호출하면 중첩 함수 inner를 반환한다.
// 그리고 outer 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 팝되어 제거된다.
const innerFunc = outer(); // 3
innerFunc(); // 10

// 카운트 상태 변경 함수
const increase = (function () {
  //카운트 상태 변수
  let num = 0;

  //클로저
  return function () {
    //카운트 상태를 1만큼 증가시킨다.
    return ++num;
  };
})();

console.log(increase()); //1
console.log(increase()); //2
console.log(increase()); //3

function Person(name, age) {
  this.name = name; // public
  let _age = age; // private

  //인스턴스 메서드
  this.sayHi = function () {
    console.log(`hello i'm ${this.name}. ${_age}`);
  };
}

const me = new Person("Lee", 20);
me.sayHi(); // hello i'm Lee 20
console.log(me.name); // Lee
console.log(me._age); // undefined
