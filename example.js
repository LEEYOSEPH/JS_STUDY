var x = "global";

function foo() {
  console.log(x);
  var x = "local";
}

foo();
console.log(x); // global

var x = 1;

// ...

// 변수의 중복 선언. 기존 변수에 값을 재할당 한다.
var x = 100;
console.log(x);

(function () {
  var foo = 100; // 즉시 실행 함수의 지역 변수
  //...
})();

console.log(foo); // foo is not defined

var MYAPP = {}; // 전역 네임스페이스 객체

MYAPP.name = "Lee";
console.log(MYAPP.name); // Lee

MYAPP.person = {
  name: "KIM",
  address: "Seoul",
};
console.log(MYAPP.person.address);

var Counter = (function () {
  // private variable
  var num = 0;

  // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --mum;
    },
  };
})();

//private 변수는 외부로 노출되지 않는다.
console.log(Counter.num); // undefined

console.log(Coutner.increase); // 1
console.log(Coutner.decrease); // 0
