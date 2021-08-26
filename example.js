function foo() {
  console.log(this); // window

  function bar() {
    console.log(this); // window
  }
  bar();
}

var value = 1;

const obj = {
  value: 100,
  foo() {
    console.log(this); // {value : 100}

    //콜백 함수 내부의 this에는 전역 객체가 바인딩된다.
    setTimeout(function () {
      console.log(this); //window
      console.log(this.value); // 1
    }, 100);

    // 메서드 내에서 정의한 중첩 함수 this에도 전역 객체가 바인딩된다.
    function bar() {
      console.log(this); // window
      console.log(this.value); //1
    }
  },
};

var value = 1;

const obj = {
  value: 100,
  foo() {
    console.log(this); // {value : 100}

    const that = this;
    //콜백 함수 내부의 this에는 전역 객체가 바인딩된다.
    setTimeout(function () {
      console.log(that.value); // 100
    }, 100);
  },
};

var value = 1;

const obj = {
  value: 100,
  foo() {
    //화살표 함수 내부의 this는 상위 스코프의 this를 가리킨다.
    setTimeout(() => console.log(this.value), 100); // 100
  },
};
obj.foo();

const person = {
  name: "Lee",
  getName() {
    // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩된다.
    return this.name;
  },
};

//메서드 getName을 호출한 객체는 person이다.
console.log(person.getName); // Lee

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const me = new Person("Lee");

//getName 메서드를 호출한 객체는 me다.
console.log(me.getName); // Lee

Person.prototype.name = "Kim";

//getName 메서드를 호출한 객체는 Person.prototype이다.
console.log(Person.prototype.getName); // Kim

//생성자 함수
function Circle(radius) {
  //생성자 함수 내부의  this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 반지름이 5인 Circle 객체를 생성
const circle1 = new Circle(5);
// 반지름이 10인 Circle 객체를 생성
const circle2 = new Circle(10);

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20

function getThisBinding() {
  return this;
}

//this로 사용할 객체
const thisArg = { a: 1 };

console.log(getThisBinding()); // window

console.log(getThisBinding().apply(thisArg)); // {a:1}
console.log(getThisBinding().call); // {a:1}

const person = {
  name: "Lee",
  foo(callback) {
    console.log(this); // {value : 100}

    const that = this;
    //bind 메서드로 콜백 함수 내부의 this바인딩을 전달
    setTimeout(callback.bind(this), 100);
  },
};
