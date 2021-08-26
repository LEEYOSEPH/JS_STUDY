"use strict";

function foo() {
  x = 10; //ReferenceError : x is not defined
}

function foo() {
  ("use strict");

  x = 10; //ReferenceError : x is not defined
}
