// // ../complication and scope....

// compiler is a computer program who convertion ur programming code to an another language according to ur language process.
// It's red marbel | red bucket;
var teacher = "Kyle"  //Exicution eingeen; // It's look like one statement but it's actually two seprate things. //
// The teacher part is handels by compiler and second kyle part is handels by execution engine.

// variable only can play to roles first role target an assighnment and in this it's receiving an assignment.
// and second role is in source position it's going up to it's value;

function otherclass(){  // Formel declaration, Also creates new red marbel.
    var teacher = 'suzy'
    console.log("welcome!" + " " + teacher)
    // var teacher = "Suzy";// that's the blue marbel because it's inside the function and the value is called blue bucket.
}

function ask(){ // creates new pink marbel.
    var question = "why?"; // new pink bucket.
    console.log(question)
}
otherclass();
ask()

// // lexical scope.
var student = 'uzair';
function fn() {
    console.log(student)
}
fn()

// // dynamic scope.
var a = 'fayyaz'
function fn3(fname) {
'use strict'
    console.log(`${a} ${fname}`)
}

function fn4() { // whoever starts with the key word function it's called function declaration;
    // 'use strict';
    a = 'Ibrahim'
    fn3('Khan')
}
fn4()
console.log(a)

// function expression;
var b = function fn5() {
    
}

let teacher2 = 'Raj'

function fn5() {
    teacher2 = 'Amit';
    subject = 'Science'; // it's check in global scope and he cannot find suject but he doesn't give us an error.
    // the global scope says we create subject just for you. therefore he dont gave us error and he ran.
    console.log(`Teacher name is ${teacher2} & Teaching us ${subject}`)
}
fn5()


var a = 'fayyaz'

function fn(){
    var a = "fayyazurrehman"
     console.log('my name is ' + a)
     var a = "india"
}

function fn1(){
    var b = "india is my country"
    console.log(b)
}

fn()
fn1()

// const a = function fn2(){

// }

var a = 'uzair'
function fn2(){
    var a = 'fayyaz'
    var b = 'urrehman'
    console.log(`my name is ${a} & my last name is ${b}`)
}
fn2()

// var a = " kyel"
// function fn(){
//     var a = "suzy"
//     console.log(" Hello  " +  a)
// }
// fn()