document.addEventListener("DOMContentLoaded", () => {


    const period = document.getElementById("period");
    period.addEventListener("click", ()=>{
    const buttonInputSign = ".";
    display(buttonInputSign); 
    });

    const zero = document.getElementById("zero");
    zero.addEventListener("click", () => {
    const buttonInputSign = "0";
    display(buttonInputSign); 
    });

    const equals = document.getElementById("equals");
    equals.addEventListener("click", () => {
    const buttonInputSign = "=";
    display(buttonInputSign); 
    });

    const plus = document.getElementById("plus");
    plus.addEventListener("click", () => {
    const buttonInputSign = "+";
    display(buttonInputSign); 
    });

    const one = document.getElementById("one");
    one.addEventListener("click", () => {
    const buttonInputSign = "1";
    display(buttonInputSign); 
    });

    const two = document.getElementById("two");
    two.addEventListener("click", () => {
    const buttonInputSign = "2";
    display(buttonInputSign); 
    });

    const three = document.getElementById("three");
    three.addEventListener("click", () => {
    const buttonInputSign = "3";
    display(buttonInputSign); 
    });

    const minus = document.getElementById("minus");
    minus.addEventListener("click", () => {
    const buttonInputSign = "-";
    display(buttonInputSign); 
    });

    const four = document.getElementById("four");
    four.addEventListener("click", () => {
    const buttonInputSign = "4";
    display(buttonInputSign); 
    });

    const five = document.getElementById("five");
    five.addEventListener("click", () => {
    const buttonInputSign = "5";
    display(buttonInputSign); 
    });

    const six = document.getElementById("six");
    six.addEventListener("click", () => {
    const buttonInputSign = "6";
    display(buttonInputSign); 
    });

    const multiply = document.getElementById("multiply");
    multiply.addEventListener("click", () => {
    const buttonInputSign = "*";
    display(buttonInputSign); 
    });

    const seven = document.getElementById("seven");
    seven.addEventListener("click", () => {
    const buttonInputSign = "7";
    display(buttonInputSign); 
    });

    const eight = document.getElementById("eight");
    eight.addEventListener("click", () => {
    const buttonInputSign = "8";
    display(buttonInputSign); 
    });

    const nine = document.getElementById("nine");
    nine.addEventListener("click", () => {
    const buttonInputSign = "9";
    display(buttonInputSign); 
    });

    const divide = document.getElementById("divide");
    divide.addEventListener("click", () => {
    const buttonInputSign = "/";
    display(buttonInputSign); 
    });

    const clear = document.getElementById("clear");
    clear.addEventListener("click", () => console.log("clear"));

    const deleteButton = document.getElementById("deleteButton");
    deleteButton.addEventListener("click", () => console.log("deleteButton"));


    function display(buttonInputSign) {
        const equation = document.querySelector("#equation");
        const input = document.createElement("div");
        // let counter = 0;
        // if (counter<17){
        equation.append(input);
        input.setAttribute("id", "inputID");
        input.innerText = buttonInputSign;
        // counter++;
        }
        // else {
        // document.get
        
        // }
    




})