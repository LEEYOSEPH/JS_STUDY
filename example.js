const base = {
  name: "lee",
  hi() {
    return `Hi ${this.name}`;
  },
};

const derived = {
  __proto__: base,
  // hi is ES6 methods
  hi() {
    return `${super.hi()}`;
  },
};

console.log(derived.hi());

const multiply = (x, y) => x * y;
multiply(2, 3); // 6

const power = (x) => x ** 2;
power(2); // 4

//화살표 함수는 상위 스코프의 this를 참조한다.
() => this.x;

//익명 함수에 상위 스코프의 this를 주입한다. 위 화살표 함수와 동일하게 동작한다.
(function () {
  return this.x;
}.bind(this));

class Base {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `${this.name}`;
  }
}

class Derived extends Base {
  // 화살표 함수의 super는 상위 스코프인 constructor의 super를 가리킨다.
  sayHi = () => `${super.sayHi()}`;
}

const derived = new Derived("Lee");
console.log(derived.sayhi()); // Lee

function foo(...rest) {
  //매개변수 rest는 인수들의 목록을 배열로 전달받는 Rest 파라미터다.
  console.log(rest); // [1,2,3,4,5]
}

foo(1, 2, 3, 4, 5);
