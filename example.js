const { prototype } = require("vue/types/umd");

const o = {};

//내부 슬롯은 자바스크립트 엔진의 내부 로직이므로 접근할 수 없다.
//o[[prototype]]; // Uncaught SyntaxError : Unexpected token '['

o.__protp__; // Object.prototype

const person = {
  //data property
  firstName: "GORO",
  lastName: "Lee",
  //getter function
  get funnName() {
    return `${this.firstName}${this.lastName}`;
  },
  //setter function
  set funnName(name) {
    [this.firstName, this.lastName] = name.split("");
  },
};

const person = {};

Object.defineProperty(person, "firstName", {
  value: "goro",
  writable: true,
  enumerable: true,
  configurable: true,
});
