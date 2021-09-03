[].length; // 0
[(1, 2, 3)].length; // 3

const arr = [1, 2, 3, 4, 5];

// 현재 length 프로퍼티 값인 5보다 작은 값 3을 length  프로퍼티에 할당
arr.length = 3;

// 배열의 길이가 5에서 3으로 줄어든다.
console.log(arr); // [1,2,3]

Array(1, 2, 3); // [1,2,3,]

//전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다.
Array.of(1); // [1]

Array.of(1, 2, 3); // [1,2,3]

Array.of("string"); // ['string']

// 유사 배열 객체를 변환하여 배열을 생성한다.
Array.from({ length: 2, 0: "a", 1: "b" }); // -> ['a','b']

// 이터러블을 변환하여 배열을 생성한다. 문자열은 이터러블이다.
Array.from("Hello"); // ['H','e','l','l','o']

//유사 배열 객체
const arrayLkie = {
  0: "apple",
  1: "banana",
  2: "orange",
  length: 3,
};

// 유사 배열 객체는 배열처럼 for문으로 순회할 수도 있다.
for (let i = 0; i < arrayLkie.length; i++) {
  console.log(arrayLkie[i]); // apple banana orange
}

const arr = [0];

//배열 요소의 추가
arr[1] = 1;

console.log(arr); // [0,1]
console.log(arr.length); // 2

//true
Array.isArray([]);
Array.isArray([1, 2]);
Array.isArray([new Array()]);

//false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(1);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray({ 0: 1, length: 1 });

const arr = [1, 2, 2, 3];

// 배열 arr에서 요소 2를 검색하여 첫 번째로 검색된 요소의 인덱스를 반환한다.
arr.indexOf(2); // -> 1
// 배열 arr에 요소 4가 없으므로 -1을 반환한다.
arr.indexOf(4); // -> -1
// 두 번째 인수는 검색을 시작할 인덱스다. 두 번째 인수를 생략하면 처음부터 검색한다.
arr.indexOf(2, 2); // ->2

const arr = [1, 2, 3, 4];

//원본 배열의 인덱스 1부터 2개의 요소를 제거하고 그 자리에 새로운 요소 20,30을 삽입한다.
const result = arr.splice(1, 2, 20, 30);

//제거한 요소가 배열로 반환된다.
console.log(result); // [2,3]

//splice 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [1,20,30,4]

const arr = [1, 2, 3];

// arr[0]부터 arr[1] 이전(arr[1]미포함) 까지 복사하여 반환한다.
arr.slice(0, 1); // ->[1]

// arr[1]부터 arr[2] 이전(arr[2]미포함) 까지 복사하여 반환한다.
arr.slice(1, 2); // ->[2]

//원본은 변경되지 않는다.
console.log(arr); // [1,2,3]

const arr = [1, 2, 3];

//배열에 요소 2가 포함되어 있는지 확인한다.
arr.includes(2); // -> true

// 배열에 요소 100이 포함되어 있는지 확인 한다.
arr.includes(100); // -> false

const fruits = ["Bananan", "Orange", "Apple"];

// 오른차순 정렬
fruits.sort();

console.log(fruits); // ['Apple', 'Bananan','Orange']

const numbers = [1, 2, 3];
const pows = [];

//forEach 메서드는 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출 한다.
numbers.forEach((item) => pows.push(item ** 2));
console.log(pows); // [1,4,9]
