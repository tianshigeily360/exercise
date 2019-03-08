document.getElementById('btn').onclick = function () {
  document.getElementById('text').innerText = "你看这个面它又长又宽，就像这个碗它又大又圆"
};

var a = 1;

function foo() {
    console.log(a);
    a = 2;
}

foo();
console.log(a);