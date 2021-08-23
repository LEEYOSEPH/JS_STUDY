// global
function foo() {
  console.log("global");
}

function bar() {
  // 중첩 합수
  function foo() {
    console.log("local");
  }
  foo(); // local
}
bar();
