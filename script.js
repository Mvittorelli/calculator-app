const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eigth = document.getElementById("eigth");
const nine = document.getElementById("nine");

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const time = document.getElementById("time");
const divide = document.getElementById("divide")

const reset = document.getElementById("reset");
const del = document.getElementById("del")
const equal = document.getElementById("equal");
const dot = document.getElementById("dot")

const result = document.getElementById("result");

let numbers = [];

zero.onclick = () => {
	numbers.push(0);
	result.innerText = numbers.join("");
};
one.onclick = () => {
	numbers.push(1);
	result.innerText = numbers.join("");
};
two.onclick = () => {
	numbers.push(2);
	result.innerText = numbers.join("");
};
three.onclick = () => {
	numbers.push(3);
	result.innerText = numbers.join("");
};
four.onclick = () => {
	numbers.push(4);
	result.innerText = numbers.join("");
};
five.onclick = () => {
	numbers.push(5);
	result.innerText = numbers.join("");
};
six.onclick = () => {
	numbers.push(6);
	result.innerText = numbers.join("");
};
seven.onclick = () => {
	numbers.push(7);
	result.innerText = numbers.join("");
};
eight.onclick = () => {
	numbers.push(8);
	result.innerText = numbers.join("");
};
nine.onclick = () => {
	numbers.push(9);
	result.innerText = numbers.join("");
};

plus.onclick = () => { 
    numbers.push("+")
    result.innerText = numbers.join("")
};

minus.onclick = () => { 
    numbers.push("-")
    result.innerText = numbers.join("")
};

time.onclick = () => { 
    numbers.push("*")
    result.innerText = numbers.join("")
};

divide.onclick = () => { 
    numbers.push("/")
    result.innerText = numbers.join("")
};

equal.onclick = () => { 
    result.innerText = eval(numbers.join(""))
    numbers=[]
};

del.onclick = () => { 
    numbers.pop();
    result.innerText = numbers.join("")
};

reset.onclick = () => { 
    numbers = []
    result.innerText = 0
};

dot.onclick = () => { 
    numbers.push(".")
    result.innerText = numbers.join("")
};