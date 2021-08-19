var person = {
  name: "Lee",
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}`);
  },
};
console.log(typeof person); // object

var empty = {}; // empty object
console.log(typeof empty); // object

var person = {
  firstName: "GORO", // 식별자 네이밍 규칙을 준수하는 키
  "last-name": "LEE", // 식별자 네이밍 규칙을 준수하지 않는 키
};

var person = {
  firstName: "GORO",
  "last-name": "LEE", // SyntaxError: Unexpected token -
};

var obj = {};
var key = "hello";

//ES5
obj[key] = "world";
//ES6
// var obj = {[key]:"world"}

console.log(obj); // {hello : "world"}

var foo = {
  name: "LEE",
  name: "Kim",
};
console.log(foo); // {name:"KIM"}

var person = {
  name: "Lee",
};

//마침표 표기법
console.log(person.name);

//대괄호 표기법
console.log(person["name"]);

var person = {
  name: "LEE",
};
person.age = 20;
console.log(person); // {name: "LEE", age: 20}

var person = {
  name: "LEE",
};
delete person.name;

//ES6
let x = 1,
  y = 7;

const obj = { x, y };

console.log(obj); // {x:1,y:2}

//ES6
const obj = {
  name: "LEE",
  //메서드 축약 표현
  sayHi() {
    console.log("hello");
  },
};

obj.sayHi(); // hello
