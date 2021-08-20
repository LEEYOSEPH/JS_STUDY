//함수 정의
function add(x, y) {
  return x + y;
}

//함수 호출
var result = add(2, 5);

//함수 add에 인수 2,5를 전달하면서 호출하면 반환값 7을 반환한다.
console.log(result); //7

//변수에 함수 리터럴을 할당
var f = function add(x, y) {
  return x + y;
};

//함수 선언문은 함수 이름을 생략할 수 없다.
function add(x, y) {
  return x + y;
}

// SyntaxError : Function statements require a function name

var add = function add(x, y) {
  return x + y;
};
console.log(add(2, 5)); // 7

//기명 함수 표현식
var add = function foo(x, y) {
  return x + y;
};

//함수 객체를 가리키는 식별자로 호출
console.log(add(2, 5));

//함수 이름으로 호출하면 ReferenceError가 발생
//함수 이름은 함수 몸체 내부에서만 유효한 식별자다.
console.log(foo(2, 5));

//화살표 함수
const add = (x, y) => x + y;
console.log(add(2, 5)); // 7

function add(x, y) {
  console.log(x, y);
  return x + y;
}
add(2, 5);

//add 함수의 매개변수는 x,y는 함수 몸체 내부에서만 참조할 수 있다.
console.log(x, y);

function add(x, y) {
  return x + y;
}
console.log(add(2)); // NaN

function add(x, y) {
  return x + y;
}

console.log(add(2, 5, 10)); // 7

function add(a = 0, b = 0, c = 0) {
  return a + b + c;
}

console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)); // 3
console.log(add(1)); // 1
console.log(add()); // 0

function multiply(x, y) {
  return x * y;
}

// 함수 호출은 반환값으로 평가된다.
var result = multiply(3, 5);
console.log(result); // 15

function multiply(x, y) {
  return x * y; // 반환문
  //반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시된다.
  console.log("실행되지 않는다");
}

console.log(multiply(3, 5)); // 15

function foo() {
  return;
}
console.log(foo()); // undefined

// 매개변수 primitive는 원시 값을 전달받고, 매개변수 obj는 객체를 전달 받는다.
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = "Kim";
}

//외부 상태
var num = 100;
var person = { name: "Lee" };

console.log(numm); // 100
console.log(person); // {name : "Lee"}

//원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다.
changeVal(num, person);

//원시 값은 원본이 훼손되지 않는다.
console.log(num); // 100

//객체는 원본이 훼손된다.
console.log(person); // {name : "Kim"}

//익명 즉시 실행 함수
(function () {
  var a = 3;
  var b = 5;
  return a * b;
})();

//기명 즉시 실행 함수
(function foo() {
  var a = 3;
  var b = 5;
  return a * b;
})();
foo(); // ReferenceError: foo is not defined

function countdown(n) {
  if (n < 0) return;
  console.log(n);
  countdown(n, -1);
}

function outer() {
  var x = 1;

  //중첩 함수
  function inner() {
    var y = 2;
    //외부 함수의 변수를 참조할 수 있다.
    console.log(x + y); // 3
  }
  inner();
}
outer();

//외부에서 전달받은 f를 n만큼 반복 호출한다.
function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i); // i를 전달하면서 f를 호출
  }
}

var logAll = function (i) {
  console.log(i);
};

//반복 호출할 함수를 인수로 전달 한다.
repeat(5, logAll);

var logOdds = function (i) {
  if (i % 2) console.log(i);
};

//반복 호출할 함수를 인수로 전달한다.
repeat(5, logOdds);

//콜백 함수를 사용한 이벤트 처리
//myButton 버튼을 클릭하면 콜백 함수를 실행한다.
document.getElementById("myButton").addEventListener("click", function () {
  console.log("button clicked!");
});

var count = 0; //현재 카운트를 나타내는 상태 : increase 함수에 의해 변화한다.

//비순수 함수
function increase() {
  return ++count; //외부 상태에 의존하며 외부 상태를 변경한다.
}

//비순수 함수는 외부 상태(count)를 변경하므로 상태 변화를 추적하기 어려워 진다.
increase();
console.log(count); //1

increase();
console.log(count); // 2
