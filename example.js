const obj = {};
const parent = { c: 1 };

// getter 함수인 get__proto__가 호출되어 obj 객체의 프로토타입을 취득
obj.__proto__;

// setter 함수인 set__proto__가 호출되어 obj 객체의 프로토타입을 교체
obj.__proto__ = parent;

console.log(obj.c); // 1

const parent = {};
const child = {};

//child의 프로토타입을 parent로 설정
child.__proto__ = parent;
//parent의 프로토타입을 child로 설정
parent.__proto__ = child; // TypeError : Cyclic __proto__ value

const obj = {};
const parent = { x: 1 };

Object.getPrototypeOf(obj); // obj.__proto__;

Object.setPrototypeOf(obj, parent); // obj.__proto__ = parent;

console.log(obj.x); // 1

//함수 객체는 prototype 프로퍼티를 소유한다.
(function () {}.hasOwnProperty("prototype")); // true

//일반 객체는 prototype 프로퍼티를 소유하지 않는다.
({}.hasOwnProperty("prototype")); //false

//생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person("Lee");

//me 객체의 생성자 함수는 Person 이다.
console.log(me.constructor === Person); // true

//함수 정의가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성된다.
console.log(Person.prototype); // {constructor : f}

//생성자 함수
function Person(name) {
  this.name = name;
}

// 화살표 함수는 non-constructor다.
const Person = (name) => {
  this.name = name;
};

console.log(Person.prototype); // undefined

const Person = (function () {
  function Person(name) {
    this.name = name;
  }

  // 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
  Person.prototype = {
    sayHello() {
      console.log(`${this.name}`);
    },
  };
  return Person;
})();
const me = new Person("Lee");

const Person = (function () {
  function Person(name) {
    this.name = name;
  }

  // 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
  Person.prototype = {
    // constructor 프로퍼티와 생성자 함수 간의 연결을 설정
    constructor: Person,
    sayHello() {
      console.log(`${this.name}`);
    },
  };
  return Person;
})();
const me = new Person("Lee");

/* 
  key: 프로퍼티 키를 나타내는 문자열
  object: 객체로 평가되는 표현식
*/
key in object

for(변수선언문 in 객체) {...}