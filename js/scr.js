// string var declaration
var str = "";

let arr = [];

// btn-1
document.getElementById("one").onclick = function () {
  str += "1";
  document.getElementById("input").value = str;
};

// btn-2
document.getElementById("two").onclick = function () {
  str += "2";
  document.getElementById("input").value = str;
};

// btn-3
document.getElementById("three").onclick = function () {
  str += "3";
  document.getElementById("input").value = str;
};

// btn-4
document.getElementById("four").onclick = function () {
  str += "4";
  document.getElementById("input").value = str;
};

// btn-5
document.getElementById("five").onclick = function () {
  str += "5";
  document.getElementById("input").value = str;
};

// btn-6
document.getElementById("six").onclick = function () {
  str += "6";
  document.getElementById("input").value = str;
};

// btn-7
document.getElementById("seven").onclick = function () {
  str += "7";
  document.getElementById("input").value = str;
};

// btn-8
document.getElementById("eight").onclick = function () {
  str += "8";
  document.getElementById("input").value = str;
};

// btn-9
document.getElementById("nine").onclick = function () {
  str += "9";
  document.getElementById("input").value = str;
};

// btn-0
document.getElementById("zero").onclick = function () {
  str += "0";
  document.getElementById("input").value = str;
};

//bracket-open btn
document.getElementById("bracket-open").onclick = function () {
  str += "(";
  document.getElementById("input").value = str;
};

// bracket-open btn
document.getElementById("bracket-close").onclick = function () {
  str += ")";
  document.getElementById("input").value = str;
};

// plus-operator-btn
document.getElementById("plus").onclick = function () {
  str += "+";
  document.getElementById("input").value = str;
};

// minus-operator-btn
document.getElementById("minus").onclick = function () {
  str += "-";
  document.getElementById("input").value = str;
};

// multiply-operator-btn
document.getElementById("multiply").onclick = function () {
  str += "*";
  document.getElementById("input").value = str;
};

// divide-operator-btn
document.getElementById("divide").onclick = function () {
  str += "/";
  document.getElementById("input").value = str;
};

// mod-operator-btn
document.getElementById("mod").onclick = function () {
  str += "%";
  document.getElementById("input").value = str;
};

//decimal-btn
document.getElementById("decimal").onclick = function () {
  str += ".";
  document.getElementById("input").value = str;
};

// equals-btn
document.getElementById("equals").onclick = function () {
  if (str.search("log") != -1) {
    var temp, arr;
    temp = str.replace("log", ",");
    arr = temp.split(",");
    str = Math.log(Number(arr[0])) / Number(Math.log(arr[1])).toString();
    document.getElementById("input").value = str;
  } else if (str.search("pow") != -1) {
    var temp, arr;
    temp = str.replace("pow", ",");
    arr = temp.split(",");
    str = Math.pow(Number(arr[0]), Number(arr[1])).toString();
    document.getElementById("input").value = str;
  } else if (str.search("xrty") != -1) {
    var temp, arr;
    temp = str.replace("xrty", ",");
    arr = temp.split(",");
    str = Math.pow(arr[1], 1 / arr[0]);
    document.getElementById("input").value = str;
  } else {
    document.getElementById("input").value = eval(str);
    str = document.getElementById("input").value;
  }
};

//clear-btn
document.getElementById("clear").onclick = function () {
  str = "";
  document.getElementById("input").value = 0;
};

//back-btn
document.getElementById("back").onclick = function () {
  str = str.slice(0, str.length - 1);
  document.getElementById("input").value = str;
};

//sign-change-btn

document.getElementById("signchange").onclick = function () {
  var b = document.getElementById("input");
  var n = b.value;
  n = n * -1;
  b.value = n;
};

//ln-btn
document.getElementById("ln").onclick = function () {
  var num = Math.log(document.getElementById("input").value);
  document.getElementById("input").value = num;
  str = num.toString();
};

//x-power-y
document.getElementById("x-power-y").onclick = function () {
  str += "pow";
  document.getElementById("input").value = str;
};

//fact-btn
document.getElementById("fact").onclick = function () {
  var num = Math.round(document.getElementById("input").value);
  var fact = 1;
  for (var i = 1; i <= num; i++) fact *= i;
  document.getElementById("input").value = fact;
  str = fact.toString();
};

//tenpow-btn
document.getElementById("tenpow").onclick = function () {
  var num = document.getElementById("input").value;
  var ans = Math.pow(10, num);
  document.getElementById("input").value = ans;
  str = ans.toString();
};

//sqrt-btn
document.getElementById("sqrt").onclick = function () {
  var num = Math.sqrt(document.getElementById("input").value);
  document.getElementById("input").value = num;
  str = num.toString();
};

//log-btn
document.getElementById("log").onclick = function () {
  var num = Math.log(document.getElementById("input").value);
  document.getElementById("input").value = num;
  str = num.toString();
};

//x2-btn
document.getElementById("x2").onclick = function () {
  var num = Math.pow(document.getElementById("input").value, 2);
  document.getElementById("input").value = num;
  str = num.toString();
};

// x3-btn
document.getElementById("x3").onclick = function () {
  var num = Math.pow(document.getElementById("input").value, 3);
  document.getElementById("input").value = num;
  str = num.toString();
};

// 1/x-btn
document.getElementById("1/x").onclick = function () {
  var num = document.getElementById("input").value;
  document.getElementById("input").value = 1 / num;
  str = (1 / num).toString();
};

//abs-btn
document.getElementById("abs").onclick = function () {
  var num = Math.abs(document.getElementById("input").value);
  document.getElementById("input").value = num;
  str = num.toString();
};

//e-btn
document.getElementById("e").onclick = function () {
  let e = 2.71828182846;
  document.getElementById("input").value = e;
  str += e.toString();
};

//exp-btn
document.getElementById("exp").onclick = function () {
  document.getElementById("input").value = Math.exp(1);
  str += Math.exp(1).toString();
};

//f-e--btn
document.getElementById("f-e").onclick = function () {
  var temp = document.getElementById("input").value;
  let expo = Math.exp(temp);
  document.getElementById("input").value = expo;
  str += expo.toString();
};

//pi-btn
document.getElementById("pi").onclick = function () {
  document.getElementById("input").value = Math.PI;
  str += Math.PI.toString();
};

//toggle-btn-(DEG/RAD)
let btn = document.getElementById("toggle-btn");
let degree = true;
btn.innerText = "DEG";
btn.value = "deg";
console.log(btn.value);
btn.style.fontWeight = "bold";
degree = !degree;
btn.addEventListener("click", () => {
  if (degree === true) {
    btn.innerText = "DEG";
    btn.value = "deg";
    console.log(btn.value);
    btn.style.fontWeight = "bold";
    degree = !degree;
  } else {
    btn.innerText = "RAD";
    btn.value = "rad";
    degree = !degree;
    btn.style.fontWeight = "bold";
    console.log(btn.value);
  }
});

//sin-btn
document.getElementById("sin").onclick = function () {
  var num;
  if (document.getElementById("toggle-btn").value == "rad") {
    num = Math.sin(document.getElementById("input").value);
    document.getElementById("input").value = num;
    str = num.toString();
  }
  if (document.getElementById("toggle-btn").value == "deg") {
    num = Math.sin(document.getElementById("input").value * (Math.PI / 180));
    document.getElementById("input").value = num;
    str = num.toString();
  }
};

//cos-btn
document.getElementById("cos").onclick = function () {
  var num;
  if (document.getElementById("toggle-btn").value == "rad") {
    num = Math.cos(document.getElementById("input").value);
    document.getElementById("input").value = num;
    str = num.toString();
  }
  if (document.getElementById("toggle-btn").value == "deg") {
    num = Math.cos(document.getElementById("input").value * (Math.PI / 180));
    document.getElementById("input").value = num;
    str = num.toString();
  }
};

// tan-btn
document.getElementById("tan").onclick = function () {
  var num;
  if (document.getElementById("toggle-btn").value == "rad") {
    num = Math.tan(document.getElementById("input").value);
    document.getElementById("input").value = num;
    str = num.toString();
  }
  if (document.getElementById("toggle-btn").value == "deg") {
    num = Math.tan(document.getElementById("input").value * (Math.PI / 180));
    document.getElementById("input").value = num;
    str = num.toString();
  }
};

//asin-btn
document.getElementById("asin").onclick = function () {
  var num;
  if (document.getElementById("toggle-btn").value == "rad") {
    num = Math.asin(document.getElementById("input").value);
    document.getElementById("input").value = num;
    str = num.toString();
  }
  if (document.getElementById("toggle-btn").value == "deg") {
    num = Math.asin(document.getElementById("input").value * (Math.PI / 180));
    document.getElementById("input").value = num;
    str = num.toString();
  }
};

//acos-btn
document.getElementById("acos").onclick = function () {
  var num;
  if (document.getElementById("toggle-btn").value == "rad") {
    num = Math.acos(document.getElementById("input").value);
    document.getElementById("input").value = num;
    str = num.toString();
  }
  if (document.getElementById("toggle-btn").value == "deg") {
    num = Math.acos(document.getElementById("input").value * (Math.PI / 180));
    document.getElementById("input").value = num;
    str = num.toString();
  }
};

//atan-btn
document.getElementById("atan").onclick = function () {
  var num;
  if (document.getElementById("toggle-btn").value == "rad") {
    num = Math.atan(document.getElementById("input").value);
    document.getElementById("input").value = num;
    str = num.toString();
  }
  if (document.getElementById("toggle-btn").value == "deg") {
    num = Math.atan(document.getElementById("input").value * (Math.PI / 180));
    document.getElementById("input").value = num;
    str = num.toString();
  }
};

// rand-btn
document.getElementById("f-rand").onclick = function () {
  document.getElementById("input").value = Math.random();
  str += Math.random.toString();
};

// round-btn
document.getElementById("f-round").onclick = function () {
  var num = Math.round(document.getElementById("input").value);
  document.getElementById("input").value = num;
  str = num.toString();
};

// trunc-btn
document.getElementById("f-trunc").onclick = function () {
  var num = Math.trunc(document.getElementById("input").value);
  document.getElementById("input").value = num;
  str = num.toString();
};

//global var declaration
var memory_sum = 0;

document.getElementById("memory-c").onclick = function () {
  arr = [];
  console.log(arr);
  console.log("memory clear");
};
document.getElementById("memory-r").onclick = function () {
  if (arr.length == 0) {
    console.log("Array is Empty");
    retrun;
  }
  let temp = arr[arr.length - 1];
  document.getElementById("input").value = temp;
  str = temp.toString();
  console.log(temp);
  console.log("memory-r");
};

document.getElementById("memory-p").onclick = function () {
  memory_sum = 0;
  if (document.getElementById("input").value == "") {
    console.log("Please Input the value");
    return;
  }
  arr.push(document.getElementById("input").value);
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    memory_sum += parseInt(arr[i]);
  }
  console.log(memory_sum);
  console.log("memory-p");
};
document.getElementById("memory-m").onclick = function () {
  if (document.getElementById("input").value == "") {
    console.log("Please Input the value");
    return;
  }
  memory_sum -= document.getElementById("input").value;
  console.log(memory_sum);
  console.log("memory-m");
};
document.getElementById("memory-s").onclick = function () {
  if (document.getElementById("input").value == "") {
    console.log("Please Input the value");
    return;
  }
  arr.push(document.getElementById("input").value);
  console.log(arr);
  console.log("memory-s");
};
