const person = new Object();

person.name = "lee";

person.hello = function () {
  console.log("hi");
};

console.log(person); // {name: 'lee'}
person.hello(); // hi

//생성자 함수
function Circle(radius) {
  console.log(this); // Circle{}
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

//인스턴스 생성
const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter); // 10
console.log(circle2.getDiameter); //20

function Circle(radius) {
  // 1. 암묵적으로 빈 객체가 생성되고 this에 바인딩 된다.

  // 2. this에 바인딩되어 있는 인스턴슬르 초기화 한다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  // 3. 암묵적으로 this를 반환한다.
  // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
  return {};
}

//인스턴스 생성
const circle1 = new Circle(5);
console.log(circle1); // {}

function foo() {
  // 일반적인 함수로서 호출: [[call]]이 호출 된다.
  foo();

  // 생성자 함수로서 호출: [[Construct]]가 호출된다.
  new foo();
}
