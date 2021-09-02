class Person {}

// 인스턴스 생성
const me = new Person();
console.log(me); // Person {}

class Person {
  //생성자

  constructor(name) {
    //인스턴스 생성 및 초기화
    this.name = name;
  }
}

//생성자 함수
function Person(name) {
  this.name = name;
}

//프로토타입 메서드
Person.prototype.sayHi = function () {
  console.log(`${this.name}`);
};

const me = new Person("Lee");
me.sayHi(); // Lee

class Person {
  // 생성자
  constructor(name) {
    //인스턴스 생성 및 초기화
    this.name = name;
  }

  //정적 메서드
  static sayHi() {
    console.log("hi");
  }
}

//수퍼(베이스/부모)클래스
class Base {}

//서브(파생자/자식)클랙스
class Derived extends Base {}

function Base() {}
class Base2 {}
let condition = true;

//조건에 따라 동적으로 상속 대상을 결정하는 서브클래스
class Derived extends (condition ? base1 : base2) {}
const derived = new Derived();
console.log(derived); // Derived {}

const obj = {
  x: 1,
  //foo is methods

  foo() {
    return this.x;
  },
  //bar에 바인딩된 함수는 메서드가 아닌 일반 함수다.
  bar: function () {
    return this.x;
  },
};

console.log(obj.foo()); // 1
console.log(obj.bar()); // 1
