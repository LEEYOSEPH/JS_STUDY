const mySymbol = Symbol();
console.log(typeof mySymbol); // symbol

console.log(mySymbol); // Symbol()

const mySymbol = Symbol();

console.log(!!mySymbol); // true

// if 문 등에서 존재 확인이 가능하다.
if (mySymbol) console.log("hello");

// 전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 없으면 새로운 심벌 값을 생성
const s1 = Symbol.for("mySymbol");
// 전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출
Symbol.keyFor(s1); // mySymbol

// Symbol 함수를 호출하여 생성한 심벌 값은 전역 심벌 레지스트리에 등록되어 관리되지 않는다.
const s2 = Symbol("foo");
// 전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출
Symbol.keyFor(s2); // undefined
