// number type
0 + '' // "0"
-0 + '' // "0"
1 + '' // "1"
-1 + '' // "-1"
NaN + '' // "NaN"
Infinity + '' // "Infinity"
-Infinity + '' // "-Infinity"

// boolean type
true + '' // "true"
false + '' // "false"

// null type
null + '' // "null"

// undefined type
undefined + '' // "undefined"

// symbol type
(Symbol()) + '' // TypeError: canno convert a Symbol value to a string

// object type
({}) + '' // "[object Object]"
Math + '' // "[object Math]"
[] + '' // ""
[10, 20] + '' // "10,20"

    
    
// string type
+ '' // 0
+ '0'// 0
+ '1'// 1
+ 'string' // NaN

//boolean type
+ true // 1
+ false // 0

//null type
+ null // 0

//undefined type
+ undefined // NaN

// symbol type
+ Symbol() // TypeError: Cannot convert a Symbol value to a number

// object type
+ {} // NaN
+ [] // 0
+ [10, 20] // NaN
    + (function () { }) // NaN

//1.
String(1); // "1"
String(NaN); // "NaN"
String(Infinity); // "Infinity"
String(true); // "ture"
String(false); // "false"

//2.
(1).toString(); // "1"
(true).toString(); // "true"

//3.
0 + '' // "0"
-0 + '' // "0"
1 + '' // "1"
-1 + '' // "-1"
NaN + '' // "NaN"
Infinity + '' // "Infinity"
-Infinity + '' // "-Infinity"

// boolean type
true + '' // "true"
false + '' // "false"

// null type
null + '' // "null"

// undefined type
undefined + '' // "undefined"

//1.
Number('0'); // 0
Number(true); // 1
Number(false); // 0

//2.
parseInt('0'); // 0
parseFloat('10.53') // 10.53

//3.
+ '' // 0
+ '0'// 0
+ '1'// 1

//4.
'0' * 1; // 0
'10.53' * 1; // 10.53

//1.
Boolean('x'); // ture
Boolean(''); // false
Boolean(0); //false
Boolean(1); // ture
Boolean(NaN); // false
Boolean(Infinity); // ture
Boolean(null); // false
Boolean(undefined); // false

//2.
!!'x'; // true
!!''; // false
!!'false'// true
!!0; //false
!!1; // true

var done = true;
var message = '';

message = done ? '완료' : '미완료';
console.log(message); // 완료


var elem = null;

var value = elem?.value; // undefined

var str = '';
var length = str?.length; // 0

var foo = null ?? 'default string';
console.log(foo); // "default string"

var foo = '' ?? 'default string';
console.log(foo); // ""