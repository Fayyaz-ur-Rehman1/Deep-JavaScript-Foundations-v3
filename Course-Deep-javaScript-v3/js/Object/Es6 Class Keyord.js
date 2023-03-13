// (Super) keyword, If you have a child class that defines a method of the same name as a parent class then we have to use Super Keyword.

class workshop{
    constructor(teacher){
        this.teacher = teacher;
    }
    ask(question){
        console.log(this.teacher,question)
    }
}

class Anotherworkshop extends workshop{
 ask(msg){
    super.ask(msg)

 }
}

// const obj = new Anotherworkshop('Kyle');
// obj.ask('This is without super')


//  // Implicit Binding;
// function fn(question) {
//     console.log(this.teacher,question)
// }

// var workshop1 = {
//     teacher : 'Jemes',
//     fn,
// }

// var workshop2 = {
//     teacher : 'Suzy',
//     fn,
// }

// // workshop1.fn("This is workkng")
// fn.call(workshop1,'That Explicit is working')



function myFunc() {
    console.log(obj.name)
}

const obj = {
    name : 'Kyle',
    myFunc,
}

obj.myFunc() // Implicit Binding;


function myFunc2() {
    console.log(obj2.name)
}

const obj2 = {
    name : 'Simpson',
    myFunc,
}

myFunc2.call(obj2); // Emplicit Binding;

// 

class fullName{
    constructor(name){
console.log('hey..'+name+'how are u')
    }
}
class second extends fullName{}

let firstCall = new second(' Danish')


console.log(firstCall)